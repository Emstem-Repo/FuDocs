import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-student-diversity3',
  templateUrl: './student-diversity3.component.html',
  styleUrls: ['./student-diversity3.component.css']
})
export class StudentDiversity3Component implements OnInit {

  wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
  fileError=false;

  teachinglearning = new TeachingLearningModel();

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.teachinglearning.description ? this.teachinglearning.description.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
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

}
