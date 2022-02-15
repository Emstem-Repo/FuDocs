import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public user!:User;
  public userResp!:User;
  
  loginModel=new CurriculamPlanningModel();
  constructor(private loginservice: LoginServiceService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
  }

  public login(){
    const username=this.loginModel.usermod.userName;
    const password=this.loginModel.usermod.password;
     this.loginservice.login(username,password).subscribe(
       (response:User)=>{
         this.userResp=response;
          next:alert("Authentication success."),this.router.navigateByUrl('/fudocs/second');
          
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
     )
  }
}
