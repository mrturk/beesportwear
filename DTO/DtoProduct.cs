using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beesportwear.DTO
{
    public class DtoProduct
    {
        public int kategori_id { get; set; }
        public string kategori_adi { get; set; }
        public string urun_cinsi { get; set; }
        public int fiyat { get; set; }
        public string aciklama { get; set; }
        public string img_url { get; set; }
        public IFormFile img { get; set; }

    }
}
