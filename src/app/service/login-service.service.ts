import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { CurriculamPlanningModel } from '../model/curriculam-planning-model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiServiceUrl = environment.apiBaseUrl;
  

  constructor(private http:HttpClient) { }

 
  public login(username:string,password:string): Observable<User>{
    //const headers=new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username+':'+password)
      })
    };
    return this.http.get<User>(`${this.apiServiceUrl}/loginapi/login`, httpOptions); 
   // return this.http.get(`${this.apiServiceUrl}/loginapi/login`,{headers, responseType: 'text' as 'json'});
  }

}
