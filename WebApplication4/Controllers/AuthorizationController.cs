using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace WebApplication4.Controllers
{
    class AuthorizationController
    {
        private SqlConnection connection;
        private string connectionString = "memes";

        public AuthorizationController()
        {
            connection = new SqlConnection(connectionString);
        }

        public bool CheckAuthorization(string login, string password)
        {
            string query = "SELECT COUNT(*) FROM authorizatio WHERE login=@Login AND password=@Password";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Login", login);
            command.Parameters.AddWithValue("@Password", password);

            try
            {
                connection.Open();
                int count = (int)command.ExecuteScalar();
                return count > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while checking authorization: " + ex.Message);
                return false;
            }
            finally
            {
                connection.Close();
            }
        }

        public bool AddAuthorization(string email, string login, string password)
        {
            string query = "INSERT INTO authorizatio (email, login, password) VALUES (@Email, @Login, @Password)";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Login", login);
            command.Parameters.AddWithValue("@Password", password);

            try
            {
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                return rowsAffected > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while adding authorization: " + ex.Message);
                return false;
            }
            finally
            {
                connection.Close();
            }
        }
    }
}