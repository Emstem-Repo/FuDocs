import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth:AuthService,
    private router:Router){}
  canActivate() {
    let role=localStorage.getItem('userType')
    if(role=='ADMIN'){
    return true;
    }
    alert("You Dont have access")
    this.router.navigate(['FuDocs']);
    return false;

  }
  
}
