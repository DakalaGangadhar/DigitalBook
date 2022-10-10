using CommonData.Models;
using MassTransit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorApp.Consumers
{
    public class AuthorConsumer : IConsumer<Book>
    {
        digitalbooksDBContext db;
        public AuthorConsumer(digitalbooksDBContext _db)
        {
            db = _db;
        }
        public Task Consume(ConsumeContext<Book> context)
        {
            var data = context.Message;
            var productdata = db.Books.Where(x => x.Id == data.Id).FirstOrDefault();
            productdata.Title = productdata.Title;
            db.Books.Update(productdata);
            db.SaveChanges();
            return Task.CompletedTask;
        }
    }
}
