import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';

@Component({
  selector: 'app-curriculam-planning2',
  templateUrl: './curriculam-planning2.component.html',
  styleUrls: ['./curriculam-planning2.component.css']
})
export class CurriculamPlanning2Component implements OnInit {
  file!: File;
  fileError = false;
  curriculamModel=new CurriculamPlanningModel();

  constructor() { }

  ngOnInit(): void {
  }

  addMore():void{
    this.curriculamModel.page2bos.push({
     year:'',
     nameOfBody:'',
     nameOfTeacher:''

    })
  }

  addMore2():void{
    this.curriculamModel.page2bos2.push({
     year:'',
     nameOfBody:'',
     nameOfTeacher:''

    })
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
