import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  
  

  private apiServiceUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public authenticate(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 
      })
    };
    return this.http.post(this.apiServiceUrl + '/loginapi/login', {
      username,
      password
    }, httpOptions);


    //return this.http.post(this.apiServiceUrl + '/loginapi/login', httpOptions);
  }
  public getuserDetails(){
    const token='Bearer'+localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 
          'Authorization':token
      })
    };

    

  }
  
}
