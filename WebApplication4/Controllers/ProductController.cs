using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace WebApplication4.Controllers
{
    class ProductController
    {
        private SqlConnection connection;
        private string connectionString = "memes";

        public ProductController()
        {
            connection = new SqlConnection(connectionString);
        }

        public List<Product> GetProducts()
        {
            string query = "SELECT * FROM products";
            SqlCommand command = new SqlCommand(query, connection);
            List<Product> products = new List<Product>();

            try
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Product product = new Product();
                    product.Id = (int)reader["product_id"];
                    product.Name = reader["name"].ToString();
                    product.ImageUrl = reader["image_url"].ToString();
                    product.Price = (decimal)reader["price"];
                    product.Category = reader["category"].ToString();
                    products.Add(product);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while getting products: " + ex.Message);
            }
            finally
            {
                connection.Close();
            }

            return products;
        }
    }

    class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
    }
}