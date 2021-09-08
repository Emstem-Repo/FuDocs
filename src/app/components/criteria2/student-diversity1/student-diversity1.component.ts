import { Component, OnInit } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-student-diversity1',
  templateUrl: './student-diversity1.component.html',
  styleUrls: ['./student-diversity1.component.css']
})
export class StudentDiversity1Component implements OnInit {
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

}
