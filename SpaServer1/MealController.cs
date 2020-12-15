using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using SpaServer1.Models;

namespace SpaServer1.Controllers
{
    public class MealController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select MealID, MealTYPE, Restaurant,
                    convert(varchar(10), MealCreationDate,120) as MealCreationDate
                        from
                        dbo.Meal
                        ";
            DataTable storage = new DataTable();
            using (var connection = new SqlConnection(ConfigurationManager.
                ConnectionStrings["MealsDBApp"].ConnectionString))
            using (var cmd = new SqlCommand(query, connection))
            using (var data = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                data.Fill(storage);
            }

            return Request.CreateResponse(HttpStatusCode.OK, storage);
        }

        public string Post(Meal m)
        {
            try
            {
                string query = @"
                    insert into dbo.Meal values
                    (
                        '" + m.MealTYPE + @"'
                        ,'" + m.Restaurant + @"'
                        ,'" + m.MealCreationDate + @"'
                    )
                ";
                DataTable storage = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MealsDBApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var data = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    data.Fill(storage);
                }

                return "Success Adding Entry";
            }
            catch (Exception)
            {
                return "Adding Entry Failed";
            }
        }

        public string Put(Meal m)
        {
            try
            {
                string query = @"
                    update dbo.Meal set
                        MealTYPE = '" + m.MealTYPE + @"'
                        ,Restaurant = '" + m.Restaurant + @"'
                        ,MealCreationDate = '" + m.MealCreationDate + @"'
                        where MealID = '" + m.MealID + @"'
                ";
                DataTable storage = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MealsDBApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var data = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    data.Fill(storage);
                }

                return "Success Updating Entry";
            }
            catch (Exception)
            {
                return "Updating Entry Failed";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Meal
                    where MealID = " + id + @"
                ";
                DataTable storage = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MealsDBApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var data = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    data.Fill(storage);
                }

                return "Entry Successfully Deleted";
            }
            catch (Exception)
            {
                return "Deleting Entry Failed";
            }
        }

        [Route("api/Meal/GetAllRestaurants")]
        [HttpGet]
        public HttpResponseMessage GetAllRestaurants()
        {
            string query = @"
                    select RestaurantTYPE from dbo.Restaurant";

            DataTable storage = new DataTable();
            using (var connection = new SqlConnection(ConfigurationManager.
                ConnectionStrings["MealsDBApp"].ConnectionString))
            using (var cmd = new SqlCommand(query, connection))
            using (var data = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                data.Fill(storage);
            }

            return Request.CreateResponse(HttpStatusCode.OK, storage);
        }
    }
}
