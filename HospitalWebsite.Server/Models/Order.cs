using System.ComponentModel.DataAnnotations;

namespace HospitalWebsite.Server.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }

        [Required]
        public int UserID { get; set; }
        [Required]
        public int MedicineID { get; set; }
    }

}