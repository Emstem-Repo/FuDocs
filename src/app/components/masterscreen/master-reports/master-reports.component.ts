import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Masterscreen } from 'src/app/model/masterscreen.model';

@Component({
  selector: 'app-master-reports',
  templateUrl: './master-reports.component.html',
  styleUrls: ['./master-reports.component.css']
})
export class MasterReportsComponent implements OnInit {
   
   wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
   masterscreens= new Masterscreen();
  constructor() { }

  ngOnInit(): void {
  }
   
  
}
