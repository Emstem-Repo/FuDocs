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

  public Login(username:string,password:string){
    const headers=new HttpHeaders({AUthorization: 'basic '+btoa(username+":"+password)})
    return this.http.get(`${this.apiServiceUrl}/loginapi/login`,{headers });
  }
  
}
