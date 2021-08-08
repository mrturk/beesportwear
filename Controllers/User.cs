using beesportwear.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace beesportwear.Controllers
{
    [ApiController]
    public class User : ControllerBase
    {
        [HttpGet]
        [Route("api/[controller]/login")]
        public IActionResult login(Users gelen)
        {
            Conn database = new Conn();
            if (database.Login(gelen)=="true")
            {
                return Ok();
            }
            else
            {
                return Unauthorized();
            }

        }
    }
}
