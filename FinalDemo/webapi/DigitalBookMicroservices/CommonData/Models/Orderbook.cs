using System;
using System.Collections.Generic;

#nullable disable

namespace CommonData.Models
{
    public partial class Orderbook
    {
        public int OrderId { get; set; }
        public string CardHolderName { get; set; }
        public string CardNumber { get; set; }
        public string ExpireDate { get; set; }
        public int? Cvv { get; set; }
        public int? CardId { get; set; }
        public int? BookIb { get; set; }
        public int? CategoryId { get; set; }
        public int? Userid { get; set; }
        public bool? OrderActive { get; set; }
        public bool? Invoiceflag { get; set; }
    }
}
