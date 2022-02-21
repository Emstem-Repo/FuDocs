import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcademicYear } from '../interfaces/academicYear';
import { Masterscreen } from '../model/masterscreen.model';



@Injectable({
  providedIn: 'root'
})


export class MasterServiceService {

  private apiServiceUrl = environment.apiBaseUrl;
  

  constructor(private http:HttpClient) { }
    token='Bearer '+localStorage.getItem('token');
    headers= new HttpHeaders(
    { 'Content-Type': 'application/json', 
      'Authorization':this.token
  })

  public getAcademicYear():Observable<AcademicYear[]>{
    const token='Bearer '+localStorage.getItem('token');
    console.log(token);
     const headers= new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    return this.http.get<AcademicYear[]>(`${this.apiServiceUrl}/academicYearMaster/getAcademicYear`,{headers});
  }

  public addAcademicYear(academicyear:AcademicYear):Observable<AcademicYear>{
    console.log(academicyear);
    const token='Bearer '+localStorage.getItem('token');
    console.log(token);
     const headers= new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    
    return this.http.post<AcademicYear>(`${this.apiServiceUrl}/academicYearMaster/addAcademicYear`,academicyear,{headers});
  }


  public updateAcademicYear(academicyear:AcademicYear): Observable<AcademicYear>{
    const token='Bearer '+localStorage.getItem('token');
    console.log(token);
     const headers= new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    return this.http.post<AcademicYear>(`${this.apiServiceUrl}/academicYearMaster/updateAcademicYear`,academicyear,{headers});
  }

  
  public deleteAcademicYear(academicYearId:number): Observable<void>{
    const token='Bearer '+localStorage.getItem('token');
     const headers= new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    console.log(academicYearId);
    return this.http.post<void>(`${this.apiServiceUrl}/academicYearMaster/deleteAcademicYear`,academicYearId, {headers});
  }
}
