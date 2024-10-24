using HospitalWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace HospitalWebsite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder([FromBody] Order newOrder)
        {
            _context.Orders.Add(newOrder);
            await _context.SaveChangesAsync();

            return Ok(newOrder);
        }
    }
}
