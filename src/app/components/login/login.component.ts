import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public user!:User;
  public userResp!:User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  loginModel=new CurriculamPlanningModel();
  constructor(private loginservice: LoginServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice:AuthenticationServiceService) {localStorage.clear()}

    authRequest:any={
      "username":this.loginModel.usermod.userName,
      "password":this.loginModel.usermod.password

    }

  ngOnInit(): void {
  }

  // public login(){
  //   const username=this.loginModel.usermod.userName;
  //   const password=this.loginModel.usermod.password;
  //    this.loginservice.login(username,password).subscribe(
  //      (response:User)=>{
  //        this.userResp=response;
  //         next:alert("Authentication success."),this.router.navigateByUrl('/fudocs/second');
          
  //     },
  //     (error:HttpErrorResponse)=>{
  //       alert(error.message)
  //     }
  //    )
  // }

  public login(){
    localStorage.clear();
    const username=this.loginModel.usermod.userName;
    const password=this.loginModel.usermod.password;
     this.authservice.authenticate(username,password).subscribe( data => {
      localStorage.setItem('token',data.access_token);
      localStorage.setItem('refreshToken',data.refresh_token);
      localStorage.setItem('userType',data.role);

      //this.isLoginFailed = false;
      //this.isLoggedIn = true;
      this.router.navigateByUrl('/fudocs/second');
    },
    err => {
      alert("Authentifiation Failed");
      this.errorMessage = err.error.message;
    }
  );
  }

  dashboard() {
    const token=localStorage.getItem('token');
  }

  

  
}
