using CommonData.Models.ModelData;
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
    public class OrderController : ControllerBase
    {
        IOrderService orderService;
        public OrderController(IOrderService _orderService)
        {
            orderService = _orderService;
        }
        [HttpPost]
        [Route("create-order")]
        public async Task<IActionResult> CreateOrder([FromBody] OrderModelData orderModelData)
        {
            try
            {
                var data =await orderService.CreateOrder(orderModelData);               
                return Ok(data);

            }
            catch (Exception ex)
            {
                return Ok(ex);

            }

        }

        [HttpGet]
        [Route("getorderdata")]
        public async Task<IActionResult> getOrderData([FromQuery] string readerEmailid)
        {
            try
            {
                dynamic data =await orderService.getOrderData(readerEmailid);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }

        }

        [HttpPut]
        [Route("order-cancel")]
        public async Task<IActionResult> cancelOrder([FromQuery] int orderBookId)
        {
            try
            {
                dynamic order =await orderService.cancelOrder(orderBookId);               
                return Ok(order);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpPut]
        [Route("invoice-view")]
        public async Task<IActionResult> invoiceView([FromQuery] int orderBookId)
        {
            try
            {
                dynamic order = await orderService.viewInvoice(orderBookId);
                return Ok(order);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpPut]
        [Route("invoice-unview")]
        public async Task<IActionResult> invoiceUnView([FromQuery] int orderBookId)
        {
            try
            {
                dynamic order = await orderService.UnviewInvoice(orderBookId);
                return Ok(order);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

    }
}
