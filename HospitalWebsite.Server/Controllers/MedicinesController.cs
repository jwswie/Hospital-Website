using HospitalWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalWebsite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public MedicinesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medicine>>> GetMedicines()
        {
            return await _context.Medicines.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Medicine>> GetMedicineById(int id)
        {
            var medicine = await _context.Medicines.FindAsync(id);
            if (medicine == null)
            {
                return NotFound();
            }
            return medicine;
        }

    }
}
