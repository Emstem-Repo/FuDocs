import { Component, OnInit } from '@angular/core';
import { AcademicYear } from 'src/app/interfaces/academicYear';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-curriculam-planning4',
  templateUrl: './curriculam-planning4.component.html',
  styleUrls: ['./curriculam-planning4.component.css']
})
export class CurriculamPlanning4Component implements OnInit {

  file!: File;
  fileError = false;
 

  curriculamModel=this.cservice.curriculamModel;
  acYeararray=new Array();

  constructor(private cservice:Critera1Service) { }

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
    this.curriculamModel.coursesvstotalstudents.push(
      {
        yearOfEnrol: '',
        studentsEnrol:'',
        totalStudents: '',
        uploadDocs:null,
      }
    )
  }

del():void{
      console.log(this.curriculamModel.coursesvstotalstudents.length)
      if(this.curriculamModel.coursesvstotalstudents.length > 1){
     this.curriculamModel.coursesvstotalstudents.pop();
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
