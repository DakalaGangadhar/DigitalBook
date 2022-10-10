using CommonData.Models;
using CommonData.Models.ModelData;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Author.Services
{
    public interface IBookService
    {
        Task<Book> CreateBooks(BookDataModel bookDataModel, string file);
        Task<dynamic> GetBookData(string auhtoremail);
        Task<dynamic> DeleteBook(int id);
        Task<dynamic> UpdateBookDetails(BookDataModel bookDataModel, string file);
        Task<dynamic> BookBlock(int id);
        Task<dynamic> BookUnBlock(int id);
    }
}
