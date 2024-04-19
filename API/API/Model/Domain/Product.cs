using System.ComponentModel.DataAnnotations;

namespace API.Model.Domain
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public float Price { get; set; }
        public string Brand { get; set; }
        public int StockQuantity { get; set; }
        public string Image { get; set; }
    }


}
