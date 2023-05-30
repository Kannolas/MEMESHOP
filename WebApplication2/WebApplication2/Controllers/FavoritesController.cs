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
    public class FavoritesController : ControllerBase
    {
        private readonly SqlConnection _connection;
        private readonly string _connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=meme2;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public FavoritesController()
        {
            _connection = new SqlConnection(_connectionString);
        }

        [HttpGet("{userId}")]
        public IActionResult GetFavorites(int userId)
        {
            List<Favorite> favorites = new List<Favorite>();

            string query = "SELECT * FROM favorites WHERE user_id = @UserId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@UserId", userId);

            try
            {
                _connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Favorite favorite = new Favorite
                    {
                        UserId = (int)reader["user_id"],
                        ProductId = (int)reader["product_id"]
                    };
                    favorites.Add(favorite);
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

            return Ok(favorites);
        }

        [HttpPost]
        public IActionResult AddFavorite([FromBody] Favorite favorite)
        {
            string query = "INSERT INTO favorites (user_id, product_id) VALUES (@UserId, @ProductId)";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@UserId", favorite.UserId);
            command.Parameters.AddWithValue("@ProductId", favorite.ProductId);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to add favorite.");
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
        public IActionResult RemoveFavorite(int userId, int productId)
        {
            string query = "DELETE FROM favorites WHERE user_id = @UserId AND product_id = @ProductId";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@UserId", userId);
            command.Parameters.AddWithValue("@ProductId", productId);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to remove favorite.");
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

    public class Favorite
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }
}