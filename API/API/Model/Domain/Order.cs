using System.ComponentModel.DataAnnotations;

namespace API.Model.Domain
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        public string OrderName { get; set; }
        public DateTime OrderDate { get; set; }
        
    }
}
