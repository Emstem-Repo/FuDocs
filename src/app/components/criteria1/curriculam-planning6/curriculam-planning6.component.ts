import { Component, OnInit } from '@angular/core';
import { AcademicYear } from 'src/app/interfaces/academicYear';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

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
  acYeararray=new Array();
  curriculamModel=this.cservice.curriculamModel;

  constructor(private cservice:Critera1Service) { 
    this.changeText = false;
  }
  ngOnInit(): void {
    if(this.curriculamModel.year.length==0){
      this.cservice.getAcademicYear();
    }
  }

 

//   public getAcademicYear(){
//     this.cservice.getAcademicYear().subscribe(
//       (response:AcademicYear[])=>{
//         for (var val of response) {
//           console.log(val.year); 
//          this.acYeararray.push(val.year);
//         }
//       }
//     )
   
// }

   addMore():void{
    this.curriculamModel.valueAddedCoureseInstitutionalList.push(
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
   
  del():void{
      console.log(this.curriculamModel.valueAddedCoureseInstitutionalList.length)
      if(this.curriculamModel.valueAddedCoureseInstitutionalList.length > 1){
     this.curriculamModel.valueAddedCoureseInstitutionalList.pop();
    }
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
