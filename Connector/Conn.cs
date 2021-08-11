using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using beesportwear.DTO;
using beesportwear.Model;
using Pomelo.Data.MySql;
namespace beesportwear.Controllers
{
    public class Conn
    {
        private string connstring;
        public Conn()
        { 
            
            connstring = @"server=localhost;port=3306;userid=beesportwear;password=?j5Le47h;database=beesportwear;";
 
            //connstring = @"server=localhost;userid=root;password=;database=beesportwear;";
        }

        public bool Login(Users gelen)
        {
            bool sonuc = false;
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
                                sonuc = true;
                            }
                            else
                            {
                                sonuc = false;
                            }
                        }
                    }
                }
            }
            catch (Exception)
            {
                sonuc = false;
            }
            return sonuc;
        }

        public bool addCatecory(DtoCategory gelen)
        {
            bool response = false;
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        connMysql.Open();
                        command.CommandText = "insert into kategoriler (kategori_adi) values (@kategori_Adi)";
                        command.Parameters.AddWithValue("@kategori_Adi", gelen.kategori_adi.ToUpper());
                        command.CommandType = System.Data.CommandType.Text;
                        command.ExecuteNonQuery();
                        connMysql.Close();
                        response = true;
                    }
                }
            }
            catch (Exception)
            {
                response=false;
            }
            return response;
        }

        public bool deleteCategory(DeleteItem request)
        {
            bool response = false;
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        connMysql.Open();
                        command.CommandText = "delete from kategoriler where id=@Id";
                        command.Parameters.AddWithValue("@Id", request.id);
                        command.CommandType = System.Data.CommandType.Text;
                        command.ExecuteNonQuery();
                        connMysql.Close();
                        response = true;
                    }
                }
            }
            catch (Exception)
            {
                response = false;
            }
            return response;
        }

        public bool deleteProduct(DeleteItem request)
        {
            bool response = false;
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        connMysql.Open();
                        command.CommandText = "delete from urunler where id=@Id";
                        command.Parameters.AddWithValue("@Id", request.id);
                        command.CommandType = System.Data.CommandType.Text;
                        command.ExecuteNonQuery();
                        connMysql.Close();
                        response = true;
                    }
                }
            }
            catch (Exception)
            {
                response = false;
            }
            return response;
        }

        public string getCategory(int gelen)
        {
            string response = "";
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM kategoriler WHERE id=@kategori_id";
                        command.Parameters.AddWithValue("@kategori_id", gelen);
                        command.CommandType = System.Data.CommandType.Text;
                        command.Connection = connMysql;
                        connMysql.Open();
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                response = reader.GetString(reader.GetOrdinal("kategori_adi"));
                            }
                            else
                            {
                                response = null;
                            }
                        }
                    }
                }
            }
            catch (Exception)
            {
                response = null;
            }
            return response;
        }


        public bool addProduct(DtoProduct gelen)
        {
            bool response = false;
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        connMysql.Open();
                        command.CommandText = "INSERT INTO `urunler` (`kategori_adi`, `urun_cinsi`, `fiyat`, `aciklama`, `img_url`) VALUES (@kategori_adi, @urun_cinsi, @fiyat, @aciklama, @img_url)";
                        command.Parameters.AddWithValue("@kategori_adi", gelen.kategori_adi);
                        command.Parameters.AddWithValue("@urun_cinsi", gelen.urun_cinsi);
                        command.Parameters.AddWithValue("@fiyat", Convert.ToInt32(gelen.fiyat));
                        command.Parameters.AddWithValue("@aciklama", gelen.aciklama);
                        command.Parameters.AddWithValue("@img_url", gelen.img_url);
                        command.CommandType = System.Data.CommandType.Text;
                        command.ExecuteNonQuery();
                        connMysql.Close();
                        response = true;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return response;
        }

        public List<Products> getProducts(string categoryName)
        {
            List<Products> alldata = new List<Products>();
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM urunler WHERE kategori_adi=@kategori_adi";
                        command.Parameters.AddWithValue("@kategori_adi", categoryName);
                        command.CommandType = System.Data.CommandType.Text;
                        command.Connection = connMysql;
                        connMysql.Open();
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                alldata.Add(new Products
                                {
                                    kategori_adi = reader.GetString(reader.GetOrdinal("kategori_adi")),
                                    urun_cinsi = reader.GetString(reader.GetOrdinal("urun_cinsi")),
                                    fiyat = reader.GetInt32(reader.GetOrdinal("fiyat")),
                                    aciklama = reader.GetString(reader.GetOrdinal("aciklama")),
                                    img_url = reader.GetString(reader.GetOrdinal("img_url")),
                                    id = reader.GetInt32(reader.GetOrdinal("id"))
                                });
                            }
                        }
                        connMysql.Close();
                    }
                }
            }
            catch (Exception)
            {
                return alldata;
            }
            return alldata;
        }


        public List<Category> getAllCategory()
        {
            List<Category> alldata = new List<Category>();
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM kategoriler ";
                        command.CommandType = System.Data.CommandType.Text;
                        command.Connection = connMysql;
                        connMysql.Open();
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                alldata.Add(new Category
                                {
                                    kategori_adi = reader.GetString(reader.GetOrdinal("kategori_adi")),
                                    id = reader.GetInt32(reader.GetOrdinal("id"))
                                });
                            }
                        }
                        connMysql.Close();
                    }
                }
            }
            catch (Exception)
            {
                return alldata;
            }
            return alldata;
        }

        public List<Products> getAllProduct()
        {
            List<Products> alldata = new List<Products>();
            try
            {
                using (MySqlConnection connMysql = new MySqlConnection(connstring))
                {
                    using (MySqlCommand command = connMysql.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM urunler";
                        command.CommandType = System.Data.CommandType.Text;
                        command.Connection = connMysql;
                        connMysql.Open();
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                alldata.Add(new Products
                                {
                                    kategori_adi = reader.GetString(reader.GetOrdinal("kategori_adi")),
                                    id = reader.GetInt32(reader.GetOrdinal("id")),
                                    aciklama=reader.GetString(reader.GetOrdinal("aciklama")),
                                    fiyat= reader.GetInt32(reader.GetOrdinal("fiyat")),
                                    img_url= reader.GetString(reader.GetOrdinal("img_url")),
                                    urun_cinsi= reader.GetString(reader.GetOrdinal("urun_cinsi"))
                                });
                            }
                        }
                        connMysql.Close();
                    }
                }
            }
            catch (Exception)
            {
                return alldata;
            }
            return alldata;
        }
    }
}
