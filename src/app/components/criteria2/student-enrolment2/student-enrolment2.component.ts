import { Component, OnInit } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-student-enrolment2',
  templateUrl: './student-enrolment2.component.html',
  styleUrls: ['./student-enrolment2.component.css']
})
export class StudentEnrolment2Component implements OnInit {
  fileError=false;
  changeText: boolean;

  teachinglearning = new TeachingLearningModel();

  constructor() { 
    this.changeText = false;
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

addMoreYear():void{
  this.teachinglearning.studentEnrolment.push(
    {
      year: '',
      programCode: [0],
      noOfSeatsAvailable:'',
      noOfStudentsEnrolled:''}
  )
}

del():void{
      console.log(this.teachinglearning.studentEnrolment.length)
      if(this.teachinglearning.studentEnrolment.length > 1){
     this.teachinglearning.studentEnrolment.pop();
    }
  }


addMoreProgCode(index:number):void{
  console.log(index);
  var i:number=0;
  this.teachinglearning.studentEnrolment.forEach(element => {
    if(index==i){
      element.programCode.push(
       0
      )
  }
    i++;
    console.log(element.programCode);
  });
}


}
