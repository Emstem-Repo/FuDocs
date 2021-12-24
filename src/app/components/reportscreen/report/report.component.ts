import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Reportscreen } from 'src/app/model/reportscreen.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

   changeText: boolean;
  wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
   reportscreens= new Reportscreen();

  constructor() { 
    this.changeText=false;
  }

  ngOnInit(): void {
  }

   @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.reportscreens.description ? this.reportscreens.description.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
  }

}
