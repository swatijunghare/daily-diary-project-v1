import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  studentData ! :any;
  selectedStudent :any;

  constructor(private apiservice:ApiService,
    private router:Router){}
  ngOnInit():void{
    this.getAllStudents();
  }

  getAllStudents(){
    this.apiservice.getStudents().subscribe((res:any)=>{ 
      
    this.studentData =res.studentDetails;
    console.log(res.studentDetails);
  })
  }
  selectStudent(id:number){
    this.apiservice.getStudentById(id).subscribe((res)=>{
      this.selectedStudent = res.studentDetails;
      //console.log(res.studentDetails);
      console.log(this.selectedStudent);
    })
  }
  clearSelectedStudent() {
    this.selectedStudent = null;
  }
  go_to_login(){
    this.router.navigate(['/vt_login'])
      }
}
