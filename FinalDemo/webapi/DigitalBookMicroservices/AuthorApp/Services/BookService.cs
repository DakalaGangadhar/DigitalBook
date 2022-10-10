using CommonData.Models;
using CommonData.Models.ModelData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorApp.Services
{
    public class BookService: IBookService
    {
        digitalbooksDBContext db;
        public BookService(digitalbooksDBContext _db)
        {
            db = _db;
        }
        public async Task<Book> CreateBooks(BookDataModel createbook, string file)
        {
            Book createbooklist = new Book();
            try
            {
                var data = db.Authorlogins.Where(x => x.Username == createbook.Referemail).FirstOrDefault();
                createbook.Authorid = data.Id;
                DateTime dateTime = DateTime.UtcNow;
                createbook.Releasedate = dateTime.ToString("dd/MM/yyyy"); //Convert.ToString(dateTime);
                createbook.baseImage = file;
                string price = Convert.ToString(createbook.Price);
                createbooklist.Price = Decimal.Parse(price);
                createbooklist.Publisher = createbook.Publisher;
                createbooklist.Title = createbook.Title;
                createbooklist.Releasedate = DateTime.Parse(createbook.Releasedate);
                createbooklist.Contentdata = createbook.Contentdata;
                createbooklist.Categoryid = Convert.ToInt32(createbook.Category);
                createbooklist.Author = createbook.Author;
                createbooklist.Active = Convert.ToBoolean(createbook.Active);
                createbooklist.Authorid = createbook.Authorid;
                createbooklist.Authormail = createbook.Referemail;
                createbooklist.Image = createbook.baseImage;

                db.Books.Add(createbooklist);
                db.SaveChanges();
                return createbooklist;
            }
            catch (Exception ex)
            {
                return createbooklist;
            }
        }

        public async Task<dynamic> GetBookData(string auhtoremail)
        {
            try
            {
                var createbooks = (from o in db.Books
                                   join i in db.Bookcategories
                                   on o.Categoryid equals i.CategoryId
                                   where (o.Authormail == auhtoremail)
                                   select new
                                   {
                                       id = o.Id,
                                       title = o.Title,
                                       Author = o.Author,
                                       Price = o.Price,
                                       category = i.CategoryName,
                                       publisher = o.Publisher,
                                       releasedate = o.Releasedate,
                                       active = o.Active,
                                       image = o.Image,
                                       contentdata = o.Contentdata,
                                       authormail = o.Authormail,
                                       categoryid = i.CategoryId
                                   }).ToList();
                return createbooks;
            }
            catch (Exception ex)
            {
                return ex;
            }

        }
        public async Task<dynamic> DeleteBook(int authorid)
        {
            try
            {
                var data = db.Books.Where(x => x.Id == authorid).FirstOrDefault();
                db.Books.Remove(data);
                db.SaveChanges();
                return "Sucessfully deleted";
            }
            catch (Exception ex)
            {
                return ex;
            }

        }

        public async Task<dynamic> UpdateBookDetails(BookDataModel bookDataModel, string file)
        {

            try
            {
                var authorUpdate = db.Books.Where(s => s.Id == bookDataModel.Id).FirstOrDefault();
                DateTime dateTime = DateTime.UtcNow; //Convert.ToString(dateTime);
                bookDataModel.baseImage = file;

                authorUpdate.Title = bookDataModel.Title;
                authorUpdate.Image = file;
                authorUpdate.Releasedate = dateTime;
                authorUpdate.Publisher = bookDataModel.Publisher;
                string price = Convert.ToString(bookDataModel.Price);
                authorUpdate.Price = Decimal.Parse(price);
                //authorUpdate.Image = createbook.Image;
                authorUpdate.Categoryid = Convert.ToInt32(bookDataModel.Category);
                authorUpdate.Contentdata = bookDataModel.Contentdata;
                authorUpdate.Active = Convert.ToBoolean(bookDataModel.Active);
                authorUpdate.Author = bookDataModel.Author;
                db.Books.Update(authorUpdate);
                db.SaveChanges();
                return "Update successfully";
            }
            catch (Exception ex)
            {
                return ex;
            }
        }

        public async Task<dynamic> BookBlock(int id)
        {
            try
            {
                var bookblobk = db.Books.Where(s => s.Id == id).FirstOrDefault();
                bookblobk.Active = false;
                db.Books.Update(bookblobk);
                db.SaveChanges();
                return "Book block successfully";
            }
            catch (Exception ex)
            {
                return ex;
            }

        }
        public async Task<dynamic> BookUnBlock(int id)
        {
            try
            {
                var bookunblobk = db.Books.Where(s => s.Id == id).FirstOrDefault();
                bookunblobk.Active = true;
                db.Books.Update(bookunblobk);
                db.SaveChanges();
                return "Book unblock successfully";
            }
            catch (Exception ex)
            {
                return ex;
            }
        }
    }
}
