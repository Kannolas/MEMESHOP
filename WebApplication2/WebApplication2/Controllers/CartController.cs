using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace WebApplication2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly SqlConnection _connection;
        private readonly string _connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=meme2;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public CartController()
        {
            _connection = new SqlConnection(_connectionString);
        }

        [HttpGet("{userId}")]
        public IActionResult GetCartByUserId(int userId)
        {
            List<CartItem> cartItems = new List<CartItem>();

            string query = "SELECT c.user_id, c.product_id, c.quantity, p.name, p.image_url, p.price, p.category FROM cart c JOIN products p ON c.product_id = p.product_id WHERE c.user_id = @UserId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@UserId", userId);

            try
            {
                _connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    CartItem cartItem = new CartItem
                    {
                        UserId = (int)reader["user_id"],
                        ProductId = (int)reader["product_id"],
                        Quantity = (int)reader["quantity"]
                    };
                    cartItems.Add(cartItem);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            finally
            {
                _connection.Close();
            }

            return Ok(cartItems);
        }

        [HttpPost]
        public IActionResult AddToCart([FromBody] CartItem cartItem)
        {
            string query = "INSERT INTO cart (user_id, product_id, quantity) VALUES (@UserId, @ProductId, @Quantity)";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@UserId", cartItem.UserId);
            command.Parameters.AddWithValue("@ProductId", cartItem.ProductId);
            command.Parameters.AddWithValue("@Quantity", cartItem.Quantity);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to add item to cart.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            finally
            {
                _connection.Close();
            }
            return Ok();
        }

        [HttpPut("{userId}/{productId}")]
        public IActionResult UpdateCartItem(int userId, int productId, [FromBody] CartItem cartItem)
        {
            string query = "UPDATE cart SET quantity = @Quantity WHERE user_id = @UserId AND product_id = @ProductId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Quantity", cartItem.Quantity);
            command.Parameters.AddWithValue("@UserId", userId);
            command.Parameters.AddWithValue("@ProductId", productId);
            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to update item in cart.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            finally
            {
                _connection.Close();
            }

            return Ok();
        }

        [HttpDelete("{userId}/{productId}")]
        public IActionResult RemoveFromCart(int userId, int productId)
        {
            string query = "DELETE FROM cart WHERE user_id = @UserId AND product_id = @ProductId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@UserId", userId);
            command.Parameters.AddWithValue("@ProductId", productId);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to remove item from cart.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            finally
            {
                _connection.Close();
            }

            return Ok();
        }
    }

    public class CartItem
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}