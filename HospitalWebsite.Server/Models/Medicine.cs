using System.ComponentModel.DataAnnotations;

namespace HospitalWebsite.Server.Models
{
    public class Medicine
    {
        [Key]
        public int MedicineID { get; set; }

        [Required]
        [StringLength(255)]
        public required string MedicineName { get; set; }

        [Required]
        public decimal MedicinePrice { get; set; }

        [Required]
        public decimal? MedicineWeight { get; set; }

        [Required]
        public int? MedicineAmount { get; set; }

        [Required]
        public required string OTCNum { get; set; }

        [Required]
        public required string MedicineDescription { get; set; }

        [Required]
        public required string Packaging { get; set; }

        [Required]
        public required string HPISCode { get; set; }

        [Required]
        public required string HealthcareProvidersOnly { get; set; }

        [Required]
        public required string MedicationRoute { get; set; }

        [Required]
        public required string MedicinePhoto { get; set; }
    }
}