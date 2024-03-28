// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
// using Microsoft.Extensions.Options;

namespace Student_Task_Tracker.Data
{
  public class StudentDbContext : DbContext
{
    public DbSet<StudentModel> studentModels { get; set; }
    public DbSet<VTModel> vtModels { get; set; }

    public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
    {
        studentModels = Set<StudentModel>();
        vtModels = Set<VTModel>();
    }
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentModel>().ToTable("Student");
            modelBuilder.Entity<VTModel>().ToTable("VT");
        }
    }
}