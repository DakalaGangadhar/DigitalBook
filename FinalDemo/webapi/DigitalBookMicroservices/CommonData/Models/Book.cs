using System;
using System.Collections.Generic;

#nullable disable

namespace CommonData.Models
{
    public partial class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Image { get; set; }
        public decimal? Price { get; set; }
        public bool? Active { get; set; }
        public string Contentdata { get; set; }
        public string Publisher { get; set; }
        public DateTime? Releasedate { get; set; }
        public int? Authorid { get; set; }
        public string Authormail { get; set; }
        public int? Categoryid { get; set; }
    }
}
