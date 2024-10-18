using System.ComponentModel.DataAnnotations;

namespace HospitalWebsite.Server.Models
{
    public class Service
    {
        [Key]
        public int ServiceID { get; set; }

        [Required]
        [MaxLength(100)]
        public required string ServiceName { get; set; }

        [Required]
        public required string ServiceDescription { get; set; }

        [Required]
        public required int DoctorID { get; set; }
    }
}
