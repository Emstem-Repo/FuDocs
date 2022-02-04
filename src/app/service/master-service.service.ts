import { HttpClient } from '@angular/common/http';
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

  public getAcademicYear():Observable<AcademicYear[]>{
    return this.http.get<AcademicYear[]>(`${this.apiServiceUrl}/academicYearMaster/getAcademicYear`);
  }

  public addAcademicYear(academicyear:AcademicYear):Observable<AcademicYear>{
    console.log(academicyear);

    
    return this.http.post<AcademicYear>(`${this.apiServiceUrl}/academicYearMaster/addAcademicYear`,academicyear);
  }


  public updateAcademicYear(academicyear:AcademicYear): Observable<AcademicYear>{
    return this.http.post<AcademicYear>(`${this.apiServiceUrl}/academicYearMaster/updateAcademicYear`,academicyear);
  }

  
  public deleteAcademicYear(academicYearId:number): Observable<void>{
    console.log(academicYearId);
    return this.http.post<void>(`${this.apiServiceUrl}/academicYearMaster/deleteAcademicYear`,academicYearId);
  }
}
