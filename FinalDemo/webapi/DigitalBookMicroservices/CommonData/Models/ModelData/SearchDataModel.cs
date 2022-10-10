using System;
using System.Collections.Generic;
using System.Text;

namespace CommonData.Models.ModelData
{
    public class SearchDataModel
    {
        public string category { get; set; } = "0";
        public string author { get; set; }
        public string publisher { get; set; }
        public int? price { get; set; }
        public string id { get; set; }
    }
}
