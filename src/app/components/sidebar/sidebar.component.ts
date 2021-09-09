import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  isExpanded2 = true;
  showSubmenu2: boolean = false;
  isShowing2 = false;
  showSubSubMenu2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
