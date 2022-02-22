import { Component, OnInit } from '@angular/core';
import { AcademicYear } from 'src/app/interfaces/academicYear';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-curriculam-planning3',
  templateUrl: './curriculam-planning3.component.html',
  styleUrls: ['./curriculam-planning3.component.css']
})
export class CurriculamPlanning3Component implements OnInit {
  file!: File;
  fileError = false;
  changeText: boolean;
  
  curriculamModel=this.cservice.curriculamModel;

  acYeararray=new Array();

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
    this.curriculamModel.institutionalData.push(
      {
        year: '',
        nameOfprogram: [0],
        interDisciplinary: ['']}
    )
  }

  addMoreProg(index:number):void{
    console.log(index);
    var i:number=0;
    this.curriculamModel.institutionalData.forEach(element => {
      if(index==i){
        element.nameOfprogram.push(
         0
        )
        element.interDisciplinary.push(
          ''
        )
    }
      i++;
      console.log(element.nameOfprogram);
      console.log(element.interDisciplinary);
    });
   
  }

    del():void{
      console.log(this.curriculamModel.institutionalData.length)
      if(this.curriculamModel.institutionalData.length > 1){
     this.curriculamModel.institutionalData.pop();
    }
  }

  addInter(index:number):void{
    console.log(index);
    var i: number=0;
    this.curriculamModel.institutionalData.forEach(element =>{
      if(index==i){
        element.interDisciplinary.push(
          ''
        )
      }
      i++;
      console.log(element.interDisciplinary);
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
