﻿using HospitalWebsite.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalWebsite.Server
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet <Appointment> Appointments { get; set; }
    }
}