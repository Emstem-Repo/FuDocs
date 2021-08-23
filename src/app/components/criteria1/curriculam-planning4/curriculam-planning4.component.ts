import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';

@Component({
  selector: 'app-curriculam-planning4',
  templateUrl: './curriculam-planning4.component.html',
  styleUrls: ['./curriculam-planning4.component.css']
})
export class CurriculamPlanning4Component implements OnInit {

  file!: File;
  fileError = false;

  curriculamModel=new CurriculamPlanningModel();

  addMore():void{
    this.curriculamModel.page4enrol.push(
      {
        yearOfEnrol: '',
        studentsEnrol:'',
        totalStudents: '',
        uploadDocs:null,
      }
    )
  }



  constructor() { }

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
