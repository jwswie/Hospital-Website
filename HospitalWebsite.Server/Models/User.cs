using System.ComponentModel.DataAnnotations;

namespace HospitalWebsite.Server.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public required string UserName { get; set; }
        public required string PhoneNumber { get; set; }
        public int? AppointmentID { get; set; }
    }

}
