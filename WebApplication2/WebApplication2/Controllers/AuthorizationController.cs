using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Data.SqlClient;

namespace WebApplication2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorizationController : ControllerBase
    {
        private readonly SqlConnection _connection;
        private readonly string _connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=meme2;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public AuthorizationController()
        {
            _connection = new SqlConnection(_connectionString);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            string query = "SELECT COUNT(*) FROM dbo.authorizatio WHERE login = @Login AND password = @Password";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Login", request.Login);
            command.Parameters.AddWithValue("@Password", request.Password);

            try
            {
                _connection.Open();
                int count = (int)command.ExecuteScalar();
                if (count == 0)
                {
                    return BadRequest("Invalid login or password.");
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

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegistrationRequest request)
        {
            string query = "INSERT INTO authorizatio (email, login, password, phone, adress, name, age) VALUES (@Email, @Login, @Password, @Phone, @Adress, @Name, @Age)";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Email", request.Email);
            command.Parameters.AddWithValue("@Login", request.Login);
            command.Parameters.AddWithValue("@Password", request.Password);
            command.Parameters.AddWithValue("@Phone", request.Phone);
            command.Parameters.AddWithValue("@Adress", request.Adress);
            command.Parameters.AddWithValue("@Name", request.Name);
            command.Parameters.AddWithValue("@Age", request.Age);

            try
            {
                _connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Unable to create new user.");
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

        [HttpGet("{login}")]
        public IActionResult GetPersonalInfo(string login)
        {
            RegistrationRequest personalInfo = null;

            string query = "SELECT * FROM authorizatio WHERE login = @Login";
            SqlCommand command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Login", login);

            try
            {
                _connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    personalInfo = new RegistrationRequest
                    {
                        Email = (string)reader["email"],
                        Phone = (string)reader["phone"],
                        Adress = (string)reader["adress"],
                        Name = (string)reader["name"],
                        Age = (int)reader["age"]
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

            if (personalInfo == null)
            {
                return NotFound("Personal info not found.");
            }

            return Ok(personalInfo);
        }

        public class LoginRequest
        {
            public string Login { get; set; }
            public string Password { get; set; }
        }

        public class RegistrationRequest
        {
            public string Email { get; set; }
            public string Login { get; set; }
            public string Password { get; set; }

            public string Phone { get; set; }

            public string Adress { get; set; }

            public string Name { get; set; }

            public int Age { get; set; }
        }
    }
}
