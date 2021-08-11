using beesportwear.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace beesportwear.Controllers
{
    [ApiController]
    public class User : ControllerBase
    {
        [HttpPost]
        [Route("api/[controller]/login")]
        public IActionResult Login(Users request)
        {
            try
            {
                Conn database = new();
                if (database.Login(request))
                {
                    return Ok(true);
                }
                else
                {
                    return Unauthorized(false);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
