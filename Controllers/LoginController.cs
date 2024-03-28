using Microsoft.AspNetCore.Mvc;
using Student_Task_Tracker.Data;

namespace Student_Task_Tracker.Controllers;

[ApiController]
[Route("[controller]")]

public class LoginController :ControllerBase
{
    private readonly StudentDbContext _context;
    public LoginController(StudentDbContext studentDbContext)
{
    _context = studentDbContext;
}
//get all VT Api
[HttpGet("vt")]
public IActionResult GetVT()
{
    var vtdetails = _context.vtModels.AsQueryable();
    return Ok(vtdetails);
}

[HttpPost("signup")]
public IActionResult SignUp([FromBody] VTModel vtObj)
{
    if(vtObj == null)
    {
        return BadRequest();
    }
    else{
        _context.vtModels.Add(vtObj);
        _context.SaveChanges();
        return Ok(new
        {
            StatusCodes = 200,
            Message = "User Added Successfully",
        });
    }
}
[HttpPost("login")]
public  IActionResult Login([FromBody] VTModel vtObj)
{
 if(vtObj == null)
 {
    return BadRequest();
 }   
 else{
   var vt = _context.vtModels.Where(a =>
   a.EmailId == vtObj.EmailId
   && a.Password == vtObj.Password).FirstOrDefault();
   if(vt != null)
   {
    return Ok(new
    {
        StatusCode = 200,
        Message = "Logged In Successfully",
        //VTData = vtObj.FullName
    });
   }
   else
   {
    return NotFound(new
    {
        StatusCode = 404,
        Message = "VT Not Found"
    });
   }


 }
}
}