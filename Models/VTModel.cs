using System.ComponentModel.DataAnnotations;

namespace Student_Task_Tracker
{
    public class VTModel
    {
        [Key]
        public int VT_Id { get; set;}
        public string? FirstName { get; set;}
        public string? LastName { get; set;}
        public string? Mobile { get; set;}
        public string? EmailId { get; set;}
        public string? Gender { get; set;}
        public string? DOB { get; set;}
        public string? Qualification { get; set;}
        public string? Password{ get; set;}
    }
}