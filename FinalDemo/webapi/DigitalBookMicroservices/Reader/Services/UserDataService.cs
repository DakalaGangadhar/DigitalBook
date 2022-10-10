using CommonData.Models;
using CommonData.Models.ModelData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Services
{
    public class UserDataService: IUserDataService
    {
        digitalbooksDBContext db;
        public UserDataService(digitalbooksDBContext _db)
        {
            db = _db;
        }
        public async Task<dynamic> GetAuthorByReaderSearch(SearchDataModel searchDataModel)
        {
            try
            {
                int categoryid = 0;
                if (searchDataModel.category == "" || searchDataModel.category == "Select Category")
                {
                    searchDataModel.category = "0";
                }
                if (searchDataModel.price == null)
                {
                    searchDataModel.price = 0;
                }
                categoryid = Convert.ToInt32(searchDataModel?.category);
                dynamic getdata = (from o in db.Books
                                   join i in db.Bookcategories
                                   on o.Categoryid equals i.CategoryId
                                   where (o.Active == true && (o.Categoryid == categoryid || o.Author == searchDataModel.author || o.Publisher == searchDataModel.publisher || o.Price == searchDataModel.price))
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
                                       authormail = o.Authormail
                                   }).ToList();

                return getdata;

            }
            catch (Exception ex)
            {
               dynamic result = ex;
                return result;
            }

        }
    }
}
