using Microsoft.EntityFrameworkCore;
using HospitalWebsite.Server.Models;

namespace HospitalWebsite.Server
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Doctor> Doctors { get; set; }
    }
}