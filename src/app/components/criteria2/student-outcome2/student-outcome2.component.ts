import { Component, OnInit } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-student-outcome2',
  templateUrl: './student-outcome2.component.html',
  styleUrls: ['./student-outcome2.component.css']
})
export class StudentOutcome2Component implements OnInit {
  fileError=false;
  changeText: boolean;
  teachinglearning = new TeachingLearningModel();

  constructor() { 
    this.changeText=false;
  }

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


}
