import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcademicYear } from '../interfaces/academicYear';
import { Criteria1Model } from '../model/criteria1-model';

@Injectable({
  providedIn: 'root'
})
export class Critera1Service {
  private apiServiceUrl = environment.apiBaseUrl;
  curriculamModel=new Criteria1Model();
  acYeararray=new Array();

  constructor(private http:HttpClient) {}

public callRequiredData(){

  //academic year
  this.getAcademicYear().subscribe(
    (response:AcademicYear[])=>{
      for (var val of response) {
       this.acYeararray.push(val.year);
      }
      this.curriculamModel.year=this.acYeararray;
    }
  )
//academic year end

}
  


  public getAcademicYear():Observable<AcademicYear[]>{
    const token='Bearer '+localStorage.getItem('token');
     const headers= new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    return this.http.get<AcademicYear[]>(`${this.apiServiceUrl}/academicYearMaster/getAcademicYear`,{headers});
  }

  public addCriteria(model:Criteria1Model):Observable<Criteria1Model>{
    const token='Bearer '+localStorage.getItem('token');
     const headers= new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    
    return this.http.post<Criteria1Model>(`${this.apiServiceUrl}/criteria1/addCriteria`,model,{headers});
  }
}
