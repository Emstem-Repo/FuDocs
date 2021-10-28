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
   @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.masterscreens.description ? this.masterscreens.description.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
  }
  
}
