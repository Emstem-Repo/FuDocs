import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';

@Component({
  selector: 'app-curriculam-planning5',
  templateUrl: './curriculam-planning5.component.html',
  styleUrls: ['./curriculam-planning5.component.css']
})
export class CurriculamPlanning5Component implements OnInit {

  wordCount:any;
  words:any;
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

  constructor() { }

  ngOnInit(): void {
  }

    
  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.curriculamModel.descriptionn ? this.curriculamModel.descriptionn.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
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
