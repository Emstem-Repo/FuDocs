import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';

@Component({
  selector: 'app-curriculam-planning6',
  templateUrl: './curriculam-planning6.component.html',
  styleUrls: ['./curriculam-planning6.component.css']
})
export class CurriculamPlanning6Component implements OnInit {
  changeText: boolean;
   descMin= false;
  descMax = false;
  file!: File;
  fileError = false;

  curriculamModel=new CurriculamPlanningModel();

   addMore():void{
    this.curriculamModel.page5val.push(
      {
        valueAdded:'',
    courseCode: '',
    yearOfOffering: '',
    courseOccured: '',
    noOfStudents: '',
    uploadDoc: null
      }
    )
  }

  constructor() { 
    this.changeText = false;
  }

  ngOnInit(): void {
  }
  fileValidation(event: any) {
    this.file = event.target.files[0];
    console.log('inside change event  ' + this.file.size)
    console.log(this.file.size > 1000000);
    if (this.file.size > 1000000)
      this.fileError = true;
    else this.fileError = false;
  
  }
}
