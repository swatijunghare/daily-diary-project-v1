using System.ComponentModel.DataAnnotations;

namespace Student_Task_Tracker
{
    public class StudentModel
    {
        [Key]
        public int Stud_Id { get; set;}
        public string? Fullname { get; set;}
        public string? Email { get; set;}
        public string? Mobile { get; set;}
        public string? Academicyear { get; set;}
    }
}