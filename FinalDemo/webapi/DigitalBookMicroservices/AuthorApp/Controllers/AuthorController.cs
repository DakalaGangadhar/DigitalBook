using AuthorApp.Services;
using CommonData.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        IAuthorService authorService;
        public AuthorController(IAuthorService _authorService)
        {
            authorService = _authorService;
        }
        [HttpPost]
        [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
        [Route("author-login")]
        public async Task<IActionResult> Login(Authorlogin authorlogin)
        {
            try
            {
                IActionResult response = Unauthorized();
                var userdata = await authorService.AuthorLogin(authorlogin, false);
                if (authorlogin != null)
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
        [Route("author-register")]
        public async Task<IActionResult> Register([FromBody] Authorlogin authorlogin)
        {
            try
            {
                IActionResult response = Unauthorized();
                var userdata = await authorService.AuthorRegister(authorlogin, true);
                if (authorlogin != null)
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
