using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Security.Principal;

namespace HospitalWebsite.Server.Models
{
    public class Appointment
    {
        [Key]
        public int AppointmentID { get; set; }

        [Required]
        public required int ServiceID { get; set; }

        public int? UserID { get; set; }

        [Required]
        [MaxLength(100)]
        public required string TimeFrom { get; set; }

        [Required]
        [MaxLength(100)]
        public required string TimeTo { get; set; }

        [Required]
        [MaxLength(100)]
        public required string AppointmentDay { get; set; }
    }
}
