using Azure.Storage.Blobs;
using CommonData.Models;
using CommonData.Models.ModelData;
using MassTransit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Reader.Services
{
    public class OrderService : IOrderService
    {
        digitalbooksDBContext db;
        private readonly IBus bus;
        public OrderService(digitalbooksDBContext _db, IBus _bus)
        {
            db = _db;
            bus = _bus;
        }
        public async Task<Orderbook> CreateOrder(OrderModelData orderModelData)
        {
            Orderbook orderbook = new Orderbook();
            try
            {
                Uri uri = new Uri("rabbitmq:localhost/fromReaderQueue");
                var endpoint = await bus.GetSendEndpoint(uri);

                var data = db.Bookcategories.Where(x => x.CategoryName == orderModelData.CategoryName).FirstOrDefault();
                var redermaildata = db.Users.Where(d => d.Username == orderModelData.ReaderMail).FirstOrDefault();
                orderbook.CardHolderName = orderModelData?.CardHolderName;
                orderbook.CardNumber = orderModelData?.CardNumber;
                orderbook.Cvv = orderModelData?.Cvv;
                orderbook.ExpireDate = orderModelData.ExpireDate;
                orderbook.CategoryId = data?.CategoryId;//Convert.ToInt32(orderModelData?.CategoryId);
                string cardID = (orderModelData.CardId != null || orderModelData.CardId != "") ? orderModelData.CardId : "0";
                orderbook.CardId = Convert.ToInt32(orderModelData?.CardId);
                orderbook.BookIb = orderModelData?.BookIb;
                orderbook.Userid = redermaildata?.Id;
                orderbook.OrderActive = true;
                orderbook.Invoiceflag = false;
                db.Orderbooks.Add(orderbook);
                db.SaveChanges();
                await endpoint.Send(orderbook);
                return orderbook;
            }
            catch (Exception ex)
            {
                return orderbook;
            }
        }

        public async Task<dynamic> getOrderData(string readerEmailid)
        {
            try
            {
                dynamic getorderdata = (from u in db.Users
                                        join ob in db.Orderbooks on u.Id equals ob.Userid
                                        join b in db.Books on ob.BookIb equals b.Id
                                        join ct in db.Cardtypes on ob.CardId equals ct.Id
                                        join c in db.Bookcategories on ob.CategoryId equals c.CategoryId
                                        where (u.Username == readerEmailid)
                                        select new
                                        {
                                            userid = u.Id,
                                            reader = u.Username,
                                            authorid = b.Id,
                                            title = b.Title,
                                            Author = b.Author,
                                            Price = b.Price,
                                            publisher = b.Publisher,
                                            releasedate = b.Releasedate,
                                            active = b.Active,
                                            image = b.Image,
                                            contentdata = b.Contentdata,
                                            authormail = b.Authormail,
                                            cardholdername = ob.CardHolderName,
                                            cardnumber = ob.CardNumber,
                                            cardexpire = ob.ExpireDate,
                                            cvv = ob.Cvv,
                                            orderid = ob.OrderId,
                                            cardtype = ct.CardName,
                                            category = c.CategoryName,
                                            orderactive = ob.OrderActive,
                                            invoiceflag=ob.Invoiceflag
                                        }).ToList();

                return getorderdata;
            }
            catch (Exception ex)
            {
                return ex;
            }
        }

        public async Task<dynamic> cancelOrder(int orderBookId)
        {
            try
            {
                var cancel = db.Orderbooks.Where(x => x.OrderId == orderBookId).FirstOrDefault();
                cancel.OrderActive = false;
                cancel.Invoiceflag = false;
                db.Orderbooks.Update(cancel);
                db.SaveChanges();
                return "Order cancel successfully";
            }
            catch (Exception ex)
            {
                return ex;
            }
        }

        public async Task<dynamic> viewInvoice(int orderBookId)
        {
            try
            {
                var viewinvoice = db.Orderbooks.Where(x => x.OrderId == orderBookId).FirstOrDefault();
                viewinvoice.Invoiceflag = true;
                db.Orderbooks.Update(viewinvoice);
                db.SaveChanges();
                return "View invoice successfully";
            }
            catch (Exception ex)
            {
                return ex;
            }
        }

        public async Task<dynamic> UnviewInvoice(int orderBookId)
        {
            try
            {
                var viewinvoice = db.Orderbooks.Where(x => x.OrderId == orderBookId).FirstOrDefault();
                viewinvoice.Invoiceflag = false;
                db.Orderbooks.Update(viewinvoice);
                db.SaveChanges();
                return "Unview invoice successfully";
            }
            catch (Exception ex)
            {
                return ex;
            }
        }



    }
}
