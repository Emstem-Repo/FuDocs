import { Component, OnInit } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-teaching-learning-process4',
  templateUrl: './teaching-learning-process4.component.html',
  styleUrls: ['./teaching-learning-process4.component.css']
})
export class TeachingLearningProcess4Component implements OnInit {
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
