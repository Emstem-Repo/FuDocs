import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcademicYear } from 'src/app/interfaces/academicYear';
import { Criteria1Model } from 'src/app/model/criteria1-model';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-curriculam-planning2',
  templateUrl: './curriculam-planning2.component.html',
  styleUrls: ['./curriculam-planning2.component.css']
})

export class CurriculamPlanning2Component implements OnInit {
  private apiServiceUrl = environment.apiBaseUrl;
  file!: File;
  fileError = false;
  curriculamModel=this.cservice.curriculamModel;
  headers= new HttpHeaders();

  constructor(private cservice:Critera1Service) {}

 

  ngOnInit(): void {
    if(this.curriculamModel.year.length==0){
      this.cservice.getAcademicYear();;
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
    this.curriculamModel.teacherBosParticipatedInbonum.push({
     year:'',
     nameOfBody:'',
     nameOfTeacher:''

    })
  }

  del():void{
      console.log(this.curriculamModel.teacherBosParticipatedInbonum.length)
      if(this.curriculamModel.teacherBosParticipatedInbonum.length > 1){
     this.curriculamModel.teacherBosParticipatedInbonum.pop();
    }
  }

  

  addMore2():void{
    this.curriculamModel.teacherparticipatedinAcademiccouncilnum.push({
     year:'',
     nameOfBody:'',
     nameOfTeacher:''

    })
  }

    del2():void{
      console.log(this.curriculamModel.teacherparticipatedinAcademiccouncilnum.length)
      if(this.curriculamModel.teacherparticipatedinAcademiccouncilnum.length > 1){
     this.curriculamModel.teacherparticipatedinAcademiccouncilnum.pop();
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

  public saveCriteria(){
    const acyearsend = {} as Criteria1Model;
    console.log('insidesaave');
    this.cservice.addCriteria(this.curriculamModel).subscribe(
      (response:Criteria1Model)=>{
        //this.acyear=response;
        //this.getAcademicYear();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }


}
