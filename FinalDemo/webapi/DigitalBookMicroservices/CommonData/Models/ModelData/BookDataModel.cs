using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace CommonData.Models.ModelData
{
    public class BookDataModel
    {
        public int? Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Author { get; set; }
        public IFormFile Image { get; set; }
        public int Price { get; set; }
        public string Active { get; set; }
        public string Contentdata { get; set; }
        public string Publisher { get; set; }
        public string Releasedate { get; set; }
        public int? Authorid { get; set; }
        public string Referemail { get; set; }
        public string baseImage { get; set; }
    }
}
