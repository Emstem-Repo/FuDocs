import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FuDocs';
  sideBarOpen = true;
  login=false;
  constructor(
    private router: Router,
  ) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  hasRoute(route: string) {
    console.log(this.router.url)
    return this.router.url.includes(route);
  }
}
