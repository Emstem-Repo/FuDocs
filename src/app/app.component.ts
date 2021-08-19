import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FuDocs';
  sideBarOpen = true;
  login=false;


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
