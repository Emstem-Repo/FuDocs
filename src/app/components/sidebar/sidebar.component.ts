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

  isExpanded3 = true;
  showSubmenu3: boolean = false;
  isShowing3 = false;
  showSubSubMenu3: boolean = false;

   isExpanded4 = true;
  showSubmenu4: boolean = false;
  isShowing4 = false;
  showSubSubMenu4: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
