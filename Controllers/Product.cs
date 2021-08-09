using beesportwear.DTO;
using beesportwear.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Hosting;

namespace beesportwear.Controllers
{

    [ApiController]
    public class Product : ControllerBase
    {

        public static IWebHostEnvironment _webHostEnvironment;

        public Product(IWebHostEnvironment webHostEnvironmentw)
        {
            _webHostEnvironment = webHostEnvironmentw;
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetProduct(int id)
        {
            Conn database = new();
            string categoryName=database.getCategory(id);
            return Ok(database.getProducts(categoryName));
        }



        [HttpPost]
        [Route("api/[controller]/addCatecory")]
        public IActionResult AddCatecory(DtoCategory request)
        {
            Conn database = new();
            if (database.addCatecory(request))
            {
                return Ok();
            }
            return BadRequest();
        }


        [HttpPost]
        [Route("api/[controller]/addProduct")]
        public IActionResult AddProduct([FromForm] DtoProduct request)
        {
            try
            {
                Conn database = new();
                int id = request.kategori_id;
                string categoryName = database.getCategory(id);
                string path = _webHostEnvironment.WebRootPath + "\\"+ categoryName + "\\";
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                using (FileStream fileStream = System.IO.File.Create(path + request.img.FileName))
                {
                    request.img.CopyTo(fileStream);
                    fileStream.Flush();
                }
                request.img_url = "http://www.beesportwear.com/"+ categoryName + "/"+ request.img.FileName;
                request.kategori_adi = categoryName;

                return Ok(database.addProduct(request));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
