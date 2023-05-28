using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace WebApplication4.Controllers
{
        class CartController
        {
            private SqlConnection connection;
            private string connectionString = "memes";

            public CartController()
            {
                connection = new SqlConnection(connectionString);
            }

            public List<CartItem> GetCartItems(int userId)
            {
                string query = "SELECT * FROM cart JOIN products ON cart.product_id=products.product_id WHERE user_id=@UserId";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@UserId", userId);
                List<CartItem> cartItems = new List<CartItem>();

                try
                {
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        CartItem cartItem = new CartItem();
                        cartItem.Product = new Product();
                        cartItem.Product.Id = (int)reader["product_id"];
                        cartItem.Product.Name = reader["name"].ToString();
                        cartItem.Product.ImageUrl = reader["image_url"].ToString();
                        cartItem.Product.Price = (decimal)reader["price"];
                        cartItem.Quantity = (int)reader["quantity"];
                        cartItems.Add(cartItem);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error while getting cart items: " + ex.Message);
                }
                finally
                {
                    connection.Close();
                }

                return cartItems;
            }

            public bool AddCartItem(int userId, int productId, int quantity)
            {
                string query = "INSERT INTO cart (user_id, product_id, quantity) VALUES (@UserId, @ProductId, @Quantity)";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@UserId", userId);
                command.Parameters.AddWithValue("@ProductId", productId);
                command.Parameters.AddWithValue("@Quantity", quantity);

                try
                {
                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error while adding cart item: " + ex.Message);
                    return false;
                }
                finally
                {
                    connection.Close();
                }
            }

            public bool UpdateCartItem(int userId, int productId, int quantity)
            {
                string query = "UPDATE cart SET quantity=@Quantity WHERE user_id=@UserId AND product_id=@ProductId";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Quantity", quantity);
                command.Parameters.AddWithValue("@UserId", userId);
                command.Parameters.AddWithValue("@ProductId", productId);

                try
                {
                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error while updating cart item: " + ex.Message);
                    return false;
                }
                finally
                {
                    connection.Close();
                }
            }
            public bool RemoveCartItem(int userId, int productId)
            {
                string query = "DELETE FROM cart WHERE user_id=@UserId AND product_id=@ProductId";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@UserId", userId);
                command.Parameters.AddWithValue("@ProductId", productId);

                try
                {
                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error while removing cart item: " + ex.Message);
                    return false;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        class CartItem
        {
            public Product Product { get; set; }
            public int Quantity { get; set; }
        }
}