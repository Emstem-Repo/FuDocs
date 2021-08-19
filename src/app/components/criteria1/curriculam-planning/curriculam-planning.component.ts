import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curriculam-planning',
  templateUrl: './curriculam-planning.component.html',
  styleUrls: ['./curriculam-planning.component.css']
})
export class CurriculamPlanningComponent implements OnInit {

  wordCount: any;
  words: any;
  descMin=false;
  descMax=false;
  file!: File;
  fileError=false;
  academicYears=[2018,2019,2020,2021]

  //curriculamModel=new CurriculamPlanningModel('write something',0,0,0,new Date(),false,null);


  constructor() { }

  ngOnInit(): void {
  }

  // @ViewChild("descripId")descrip!: ElementRef;
  // wordCounter() {
  //   //alert(this.text.nativeElement.value)
  //   this.wordCount = this.curriculamModel.description ?this.curriculamModel.description.split(/\s+/) : 0;
  //   this.words = this.wordCount ? this.wordCount.length : 0;
  //   if (this.words<100)  
  //     this.descMin=true;
  //   else this.descMin=false;
  //   if (this.words>500) 
  //     this.descMax=true;
  //   else this.descMax=false;
  // }
  // fileValidation(event:any) {
  //   this.file = event.target.files[0];
  //   console.log('inside change event  '+this.file.size)
  //   console.log(this.file.size>1000000);
  //   if(this.file.size>1000000)
  //       this.fileError=true;
  //   else this.fileError=false;
    
  // }

}
