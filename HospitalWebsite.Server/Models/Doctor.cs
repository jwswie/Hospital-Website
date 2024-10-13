using System.ComponentModel.DataAnnotations;

namespace HospitalWebsite.Server.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorID { get; set; }

        [Required]
        [MaxLength(100)]
        public required string DoctorName { get; set; }

        [MaxLength(100)]
        public required string DoctorSpecialty { get; set; }

        public required string Greetings { get; set; }
    }
}
