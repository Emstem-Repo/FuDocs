import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { CurriculamPlanningModel } from '../model/curriculam-planning-model';
import { Critera1Service } from './critera1.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiServiceUrl = environment.apiBaseUrl;
  

  constructor(private c1service:Critera1Service) { }

 
  public setrequredData(){
    this.c1service.callRequiredData();
  }

}
