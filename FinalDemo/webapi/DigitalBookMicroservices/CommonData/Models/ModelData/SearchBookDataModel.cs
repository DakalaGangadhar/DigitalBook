using System;
using System.Collections.Generic;
using System.Text;

namespace CommonData.Models.ModelData
{
    public class SearchBookDataModel
    {
        public int id { get; set; }
        public string title { get; set; }
        public string Author { get; set; }
        public decimal? Price { get; set; }
        public string category { get; set; }
        public string publisher { get; set; }
        public DateTime? releasedate { get; set; }
        public bool? active { get; set; }
        public string image { get; set; }
        public string contentdata { get; set; }
        public string authormail { get; set; }
    }
}
