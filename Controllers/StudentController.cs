using Microsoft.AspNetCore.Mvc;
using Student_Task_Tracker.Data;

namespace Student_Task_Tracker.Controllers;

[ApiController]
[Route("[controller]")]

    public class StudentController : ControllerBase
    {
private readonly StudentDbContext _context;

public StudentController(StudentDbContext studentDbContext)
{
    _context = studentDbContext;
}

[HttpPost("add_student")]
public IActionResult AddStudent([FromBody] StudentModel studentObj)
{
    if(studentObj == null)
    {
        return BadRequest();
    }
    else
    {
        _context.studentModels.Add(studentObj);
        _context.SaveChanges();
        return Ok(new
        {
        StatusCodes = 200,
        Message = "Student Added Successfully"
        });
    }
}
[HttpGet("get_all_student")]
public IActionResult GetAllStudents()
{
    var students = _context.studentModels.AsQueryable();
    return Ok(new 
    {
        StatusCode = 200,
        StudentDetails= students
    });
}

[HttpGet("get_student/{id}")]
public IActionResult GetStudent(int id)
{
var student = _context.studentModels.Find(id);
if(student == null)
{
    return NotFound(new
    {
        StatusCode = 404,
        Message = "Student Not Found"
    });
}
else 
{
    return Ok(new 
    {
        StatusCode = 200,
        StudentDetails= student
    });
}

}
    }
