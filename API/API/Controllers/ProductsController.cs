using API.CustomActionFilters;
using API.Data;
using API.Model.Domain;
using API.Model.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly HungdbContext dbContext;

        public ProductsController(HungdbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            var result = await dbContext.Products.ToListAsync();
            if (result == null)
            {
                return Ok(null);
            }
            return Ok(result);

        }
        [HttpGet]
        [Route("{id:int}")]
        [ValidateModel]
        public async Task<IActionResult> GetProductByID(int id)
        {
            var product = await dbContext.Products.FirstOrDefaultAsync(p => p.ProductID == id);
            if (product == null)
            {
                return NotFound("Sản phẩm không tồn tại");
            }

            return Ok(product);
        }



        [HttpPost]
        [ValidateModel]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDTO productDTO)
        {
            var product = new Product()
            {
                ProductName = productDTO.ProductName,
                Price = productDTO.Price,
                Brand = productDTO.Brand,
                StockQuantity = productDTO.StockQuantity,
                Image = productDTO.Image,
            };
            await dbContext.Products.AddAsync(product);
            await dbContext.SaveChangesAsync();
            return Ok(product);
        }
        [HttpDelete]
        [Route("{id:int}")]
        [ValidateModel]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            var result = await dbContext.Products.FirstOrDefaultAsync(x => x.ProductID == id);
            if (result == null)
            {
                return Ok(null);
            }
            dbContext.Products.Remove(result);
            await dbContext.SaveChangesAsync();
            return Ok(result);

        }
        [HttpPut]
        [Route("{id:int}")]
        [ValidateModel]

        public async Task<IActionResult> UpdateProduct([FromRoute] int id, [FromBody] ProductDTO updatedProduct)
        {
            var existingProduct = await dbContext.Products.FirstOrDefaultAsync(x => x.ProductID == id);
            if (existingProduct == null)
            {
                return NotFound(); 
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); 
            }

            existingProduct.ProductName = updatedProduct.ProductName; 
            existingProduct.Price = updatedProduct.Price;
            existingProduct.Brand = updatedProduct.Brand;
            existingProduct.StockQuantity = updatedProduct.StockQuantity;
            existingProduct.Image = updatedProduct.Image;
            try
            {
                await dbContext.SaveChangesAsync();
                return Ok(existingProduct); 
            }
            catch (DbUpdateException)
            {
                // Xử lý lỗi nếu không thể cập nhật vào cơ sở dữ liệu.
                return StatusCode(500, "Lỗi cơ sở dữ liệu");
            }
        }
    }
}
