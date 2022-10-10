using CommonData.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reader.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    public class UserLoginController : ControllerBase
    {
        IUserLoginService userLoginService;
        public UserLoginController(IUserLoginService _userLoginService)
        {
            userLoginService = _userLoginService;
        }
        [HttpPost]
        [Route("login-user")]
        public async Task<IActionResult> UserLogin(User user)
        {
            try
            {
                IActionResult response = Unauthorized();
                var userdata = await userLoginService.UserLogin(user, false);
                if (user != null)
                {
                    response = Ok(new { token = userdata });
                }
                return response;
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
           
        }

        [HttpPost]
        [Route("register-user")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            try
            {
                IActionResult response = Unauthorized();
                var userdata = await userLoginService.UserRegistation(user, true);
                if (user != null)
                {
                    response = Ok(new { token = userdata });
                }
                return response;
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
           
        }
    }
}
