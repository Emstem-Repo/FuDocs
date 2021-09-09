import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-student-outcome1',
  templateUrl: './student-outcome1.component.html',
  styleUrls: ['./student-outcome1.component.css']
})
export class StudentOutcome1Component implements OnInit {
  wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
  fileError=false;
  teachinglearning = new TeachingLearningModel();

  constructor() { }

  ngOnInit(): void {
  }
  fileValidation(event:any):boolean {
    var file: File = event.target.files[0];
    console.log(event.target);
    if(file.size>1000000){
        //this.fileError=true;
        return true;
    }
    else {
        this.fileError=false;
        return false;
    }
  }

  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.teachinglearning.description5 ? this.teachinglearning.description5.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
  }


}
