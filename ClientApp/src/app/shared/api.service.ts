import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loginAPIUrl : string = "https://localhost:7158/Login/";
  public studentAPIUrl : string = "https://localhost:7158/Student/";

  constructor(private http:HttpClient) { }

  getStudents(){
    return this.http.get<any>(`${this.studentAPIUrl}get_all_student`)
    .pipe(map((res:any)=>{
      return res; 
    }))
  }
  getStudentById(id:number){
    return this.http.get<any>(`${this.studentAPIUrl}get_student/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  login(vtObj : any){
    return this.http.post<any>(`${this.loginAPIUrl}login`,vtObj);
  }

}
