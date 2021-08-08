using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using beesportwear.Model;
using Pomelo.Data.MySql;
namespace beesportwear.Controllers
{
    public class Conn
    {
        private string connstring;
        public Conn()
        {
            // connstring = @"server=localhost;port=3306;userid=celikvilla;password=~sg32sQ7;database=celikvilla;";
            connstring = @"server=localhost;userid=root;password=;database=beesportwear;";
        }

        public string Login(Users gelen)
        {
            string sonuc = "";
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM user WHERE username=@userName and password=@passWord";
                        command.Parameters.AddWithValue("@userName", gelen.username);
                        command.Parameters.AddWithValue("@passWord", gelen.password);
                        command.CommandType = System.Data.CommandType.Text;
                        command.Connection = connMysql;
                        connMysql.Open();
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                sonuc = "true";
                            }
                            else
                            {
                                sonuc = "false";
                            }
                        }
                    }
                }
            }
            catch (Exception)
            {
                sonuc = "false";
            }
            return sonuc;
        }
    }
}
