using System.ComponentModel.DataAnnotations;

namespace HospitalWebsite.Server
{
    public class Doctor
    {
        [Key]
        public int DoctorID { get; set; }

        public required string DoctorName { get; set; }

        public required string DoctorSpecialty { get; set; }

        public required string Greetings { get; set; }
    }
}
