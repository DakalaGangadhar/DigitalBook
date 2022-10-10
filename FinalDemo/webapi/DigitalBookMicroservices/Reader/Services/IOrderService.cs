using CommonData.Models;
using CommonData.Models.ModelData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Services
{
    public interface IOrderService
    {
        Task<Orderbook> CreateOrder(OrderModelData orderModelData);
        Task<dynamic> getOrderData(string readerEmailid);
        Task<dynamic> cancelOrder(int orderBookId);
        Task<dynamic> viewInvoice(int orderBookId);
        Task<dynamic> UnviewInvoice(int orderBookId);
    }
}
