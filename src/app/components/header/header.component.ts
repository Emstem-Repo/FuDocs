import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria1Model } from 'src/app/model/criteria1-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private cservice:Critera1Service) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  hasRoute(route: string) {
    console.log()
    return this.router.url.includes(route);
  }
  logout(){
    localStorage.clear();
    this.cservice.curriculamModel=new Criteria1Model();
    window.location.reload()
    this.router.navigateByUrl('/FuDocs');
  }
}
