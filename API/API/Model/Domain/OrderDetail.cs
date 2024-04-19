using System.ComponentModel.DataAnnotations;

namespace API.Model.Domain
{
    public class OrderDetail
    {
        [Key] public int OrderDetailID { get; set; }
        public int OrderID { get; set; }
        public int ProductID { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }
        public float Quantity { get; set; }
        public float Price { get; set; }

    }
}
