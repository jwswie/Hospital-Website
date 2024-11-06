using HospitalWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalWebsite.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CartController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserCart(int userId)
        {
            var cartItems = await _context.Orders
                .Where(o => o.UserID == userId)
                .Join(_context.Medicines,
                    order => order.MedicineID,
                    medicine => medicine.MedicineID,
                    (order, medicine) => new
                    {
                        MedicineID = medicine.MedicineID,
                        MedicineName = medicine.MedicineName,
                        MedicinePrice = medicine.MedicinePrice,
                        MedicinePhoto = medicine.MedicinePhoto,
                        Quantity = order.Quantity,
                        TotalPrice = medicine.MedicinePrice * order.Quantity
                    })
                .ToListAsync();

            return Ok(cartItems);
        }
    }
}
