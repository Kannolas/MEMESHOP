using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace WebApplication4.Controllers
{
    class PersonalInfoController
    {
        private SqlConnection connection;
        private string connectionString = "memes";

        public PersonalInfoController()
        {
            connection = new SqlConnection(connectionString);
        }

        public PersonalInfo GetPersonalInfo(int userId)
        {
            string query = "SELECT * FROM personal_info WHERE user_id=@UserId";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@UserId", userId);
            PersonalInfo personalInfo = null;

            try
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    personalInfo = new PersonalInfo();
                    personalInfo.UserId = (int)reader["user_id"];
                    personalInfo.Phone = reader["phone"].ToString();
                    personalInfo.Address = reader["address"].ToString();
                    personalInfo.Name = reader["name"].ToString();
                    personalInfo.Age = (int)reader["age"];
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while getting personal info: " + ex.Message);
            }
            finally
            {
                connection.Close();
            }

            return personalInfo;
        }

        public bool UpdatePersonalInfo(PersonalInfo personalInfo)
        {
            string query = "UPDATE personal_info SET phone=@Phone, address=@Address, name=@Name, age=@Age WHERE user_id=@UserId";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Phone", personalInfo.Phone);
            command.Parameters.AddWithValue("@Address", personalInfo.Address);
            command.Parameters.AddWithValue("@Name", personalInfo.Name);
            command.Parameters.AddWithValue("@Age", personalInfo.Age);
            command.Parameters.AddWithValue("@UserId", personalInfo.UserId);

            try
            {
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                return rowsAffected > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while updating personal info: " + ex.Message);
                return false;
            }
            finally
            {
                connection.Close();
            }
        }
    }

    class PersonalInfo
    {
        public int UserId { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
    }
}