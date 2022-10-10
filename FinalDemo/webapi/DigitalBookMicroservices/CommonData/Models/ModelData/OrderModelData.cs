using System;
using System.Collections.Generic;
using System.Text;

namespace CommonData.Models.ModelData
{
    public class OrderModelData
    {
        public string CardHolderName { get; set; }
        public string CardNumber { get; set; }
        public string ExpireDate { get; set; }
        public int? Cvv { get; set; }
        public string CardId { get; set; }
        public int? BookIb { get; set; }
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string ReaderMail { get; set; }
    }
}
