using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SpaServer1.Models;

namespace SpaServer1.Controllers
{
    public class RestaurantController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select RestaurantID, RestaurantTYPE from
                        dbo.Restaurant
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

        public string Post(Restaurant res)
        {
            try
            {
                string query = @"
                    insert into dbo.Restaurant values
                    ('"+ res.RestaurantTYPE + @"')
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
            catch(Exception)
            {
                return "Adding Entry Failed";
            }
        }

        public string Put(Restaurant res)
        {
            try
            {
                string query = @"
                    update dbo.Restaurant set RestaurantTYPE = 
                    '" + res.RestaurantTYPE + @"'
                    where RestaurantID = "+res.RestaurantID+@"
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
                    delete from dbo.Restaurant
                    where RestaurantID = " + id + @"
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
    }
}
