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
    public class ProductsController : ControllerBase
    {
        private readonly SqlConnection _connection;
        private readonly string _connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=meme2;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";


        public ProductsController()
        {
            _connection = new SqlConnection(_connectionString);
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            List<Product> products = new List<Product>();

            string query = "SELECT * FROM products";
            SqlCommand command = new SqlCommand(query, _connection);

            try
            {
                _connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Product product = new Product
                    {
                        ProductId = (int)reader["product_id"],
                        Name = (string)reader["name"],
                        ImageUrl = (string)reader["image_url"],
                        Price = (decimal)reader["price"],
                        Category = (string)reader["category"]
                    };
                    products.Add(product);
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

            return Ok(products);
        }

        [HttpGet("{productId}")]
        public IActionResult GetProductById(int productId)
        {
            Product product = null;

            string query = "SELECT * FROM products WHERE product_id = @ProductId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@ProductId", productId);

            try
            {
                _connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    product = new Product
                    {
                        ProductId = (int)reader["product_id"],
                        Name = (string)reader["name"],
                        ImageUrl = (string)reader["image_url"],
                        Price = (decimal)reader["price"],
                        Category = (string)reader["category"]
                    };
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

            if (product == null)
            {
                return NotFound("Product not found.");
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody] Product product)
        {
            string query = "INSERT INTO products (name, image_url, price, category) VALUES (@Name, @ImageUrl, @Price, @Category)";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Name", product.Name);
            command.Parameters.AddWithValue("@ImageUrl", product.ImageUrl);
            command.Parameters.AddWithValue("@Price", product.Price);
            command.Parameters.AddWithValue("@Category", product.Category);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to create product.");
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
        [HttpPut("{productId}")]
        public IActionResult UpdateProduct(int productId, [FromBody] Product product)
        {
            string query = "UPDATE products SET name = @Name, image_url = @ImageUrl, price = @Price, category = @Category WHERE product_id = @ProductId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Name", product.Name);
            command.Parameters.AddWithValue("@ImageUrl", product.ImageUrl);
            command.Parameters.AddWithValue("@Price", product.Price);
            command.Parameters.AddWithValue("@Category", product.Category);
            command.Parameters.AddWithValue("@ProductId", productId);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to update product.");
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

        [HttpDelete("{productId}")]
        public IActionResult DeleteProduct(int productId)
        {
            string query = "DELETE FROM products WHERE product_id = @ProductId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@ProductId", productId);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to delete product.");
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

    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
    }
}