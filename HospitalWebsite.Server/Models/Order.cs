using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
    
        [Required]
        public int Quantity { get; set; }

        [ForeignKey("MedicineID")]
        public Medicine Medicine { get; set; }
    }
}