using API.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class HungdbContext : DbContext
    {
        public HungdbContext(DbContextOptions<HungdbContext> dbContextOptions) : base(dbContextOptions)
        {

        }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> orderDetails { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {

            base.OnModelCreating(modelBuilder);

            var products = new List<Product>()

            {

                new Product()

                {

                    ProductID = 1,

                    ProductName = "New Balance 550 White Green",

                    Price = 3790000,

                    Brand = "NewBalance",

                    StockQuantity = 1,

                    Image = "https://sneakerholicvietnam.vn/wp-content/uploads/2021/10/giay-new-balance-nb-chinh-hang-bb550wt1-11.jpg".ToString()

                },

                 new Product()

                {

                    ProductID = 2,

                    ProductName = "MLB Chunky Liner New York Yankees White Green",

                    Price = 2790000,

                    Brand = "MLB",

                    StockQuantity = 1,

                    Image = "https://chiaki.vn/upload/news/content/2022/04/giay-mlb-chunky-liner-white-green-3asxca12n-50gns-jpg-1649039997-04042022093957.jpg".ToString()

                },

            };

            modelBuilder.Entity<Product>().HasData(products);
        }
    }
   
}