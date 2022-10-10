using CommonData.Models.ModelData;
using MassTransit;
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
    public class UserDataController : ControllerBase
    {
        IUserDataService userdataService;
        private readonly IBus bus;
        public UserDataController(IUserDataService _userdataService, IBus _bus)
        {
            userdataService = _userdataService;
            bus = _bus;
        }
        [HttpPost]
        [Route("GetAuthorByReaderSearch")]
        public async Task<IActionResult> GetAuthorByReaderSearch([FromBody] SearchDataModel searchDataModel)
        {
            try
            {
                dynamic data=null;
                if (searchDataModel!=null)
                {
                    data = await userdataService.GetAuthorByReaderSearch(searchDataModel);                   
                }
               
                if (data == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(data);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
