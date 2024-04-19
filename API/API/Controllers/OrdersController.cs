using API.CustomActionFilters;
using API.Data;
using API.Model.Domain;
using API.Model.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OrdersController : ControllerBase
    {
        private readonly HungdbContext dbContext;

        public OrdersController(HungdbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            var result = await dbContext.Orders.ToListAsync();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        [HttpPost]
        [ValidateModel]
        public async Task<IActionResult> NewOrders([FromBody] OrderDTO OrderDTO)
        {
            var order = new Order()
            {
                OrderName = OrderDTO.OrderName,
                OrderDate = OrderDTO.OrderDate,
            };
            await dbContext.Orders.AddAsync(order);
            await dbContext.SaveChangesAsync();
            return Ok(order);
        }
        [HttpDelete]
        [Route("{id:int}")]
        [ValidateModel]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            var relsult = await dbContext.Orders.FirstOrDefaultAsync(x => x.OrderID == id);
            if (relsult == null)
            {
                return Ok(null);
            }
            dbContext.Orders.Remove(relsult);
            await dbContext.SaveChangesAsync();
            return Ok(relsult);

        }
        [HttpPut]
        [Route("{id:int}")]
        [ValidateModel]

        public async Task<IActionResult> UpdateOrder([FromRoute] int id, [FromBody] OrderDTO updatedOrder)
        {
            var existingOrder = await dbContext.Orders.FirstOrDefaultAsync(x => x.OrderID == id);
            if (existingOrder == null)
            {
                return NotFound();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            existingOrder.OrderName = updatedOrder.OrderName;
            existingOrder.OrderDate = updatedOrder.OrderDate;
            try
            {
                await dbContext.SaveChangesAsync();
                return Ok(existingOrder);
            }
            catch (DbUpdateException)
            {
                // Xử lý lỗi nếu không thể cập nhật vào cơ sở dữ liệu.
                return StatusCode(500, "Lỗi cơ sở dữ liệu");
            }
        }
    }
}
