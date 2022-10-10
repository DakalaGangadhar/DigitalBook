using AuthorApp.Services;
using CommonData.Models.ModelData;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace AuthorApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        public static IWebHostEnvironment _environment;
        IBookService bookService;
        [BindProperty]
        public BookDataModel bookData { get; set; }
        public BooksController(IWebHostEnvironment environment, IBookService _bookService)
        {
            _environment = environment;
            bookService = _bookService;
        }
        [HttpPost, DisableRequestSizeLimit]
        [Route("create-books")]
        public async Task<IActionResult> CreateBooks([FromForm] BookDataModel bookDataModel)
        {
            try
            {
                Guid guid = Guid.NewGuid();
                string pathImage = string.Empty;
                var file = Request.Form.Files[0];
                var foldername = "Images";
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);
                var dbPath = string.Empty;
                if (bookDataModel.Image.Length > 0)
                {
                    string str = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

                    var fileName = guid + "_" + str;// ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    dbPath = Path.Combine(foldername, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                }
                var createbook = await bookService.CreateBooks(bookDataModel, dbPath);
                if (createbook != null)
                {
                    return Ok(new { success = createbook });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpGet]
        [Route("getbooksdata")]
        public async Task<IActionResult> Getbooksdata([FromQuery] string auhtoremail)
        {
            try
            {
                dynamic getbookdat = await bookService.GetBookData(auhtoremail);
                if (getbookdat != null)
                {
                    return Ok(getbookdat);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }



        }

        [HttpDelete]
        [Route("book-delete")]
        public async Task<IActionResult> BookDelete([FromQuery] int authorid)
        {
            try
            {
                dynamic bookDelete = await bookService.DeleteBook(authorid);
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }


        }

        [HttpPut, DisableRequestSizeLimit]
        [Route("bookupdate")]
        public async Task<IActionResult> Bookupdate([FromForm] BookDataModel bookDataModel)
        {
            try
            {
                Guid guid = Guid.NewGuid();
                string pathImage = string.Empty;
                var file = Request.Form.Files[0];
                var foldername = "Images";
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);
                if (bookDataModel.Image.Length > 0)
                {
                    string str = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

                    var fileName = guid + "_" + str;// ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(foldername, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    var dta = await bookService.UpdateBookDetails(bookDataModel, dbPath);
                    var response = new { Status = "Success" };
                    return Ok(response);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpPut]
        [Route("book-block")]
        public async Task<IActionResult> BookBlock([FromBody] int id)
        {
            try
            {
                var data = await bookService.BookBlock(id);
                var response = new { Status = data };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
        [HttpPut]
        [Route("book-unblock")]
        public async Task<IActionResult> BookUnBlock([FromBody] int id)
        {
            try
            {
                var data = await bookService.BookUnBlock(id);
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }


        }
    }
}
