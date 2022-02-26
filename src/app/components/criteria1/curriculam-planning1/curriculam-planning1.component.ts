import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Criteria1Model } from 'src/app/model/criteria1-model';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-curriculam-planning1',
  templateUrl: './curriculam-planning1.component.html',
  styleUrls: ['./curriculam-planning1.component.css']
})
export class CurriculamPlanning1Component implements OnInit {
  wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
  file!: File;
  fileError = false;
  curriculamModel=this.servic.curriculamModel;;
  toogle:boolean=true;

  
  

  constructor(private servic:Critera1Service) { }

  ngOnInit(): void {
  }

  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.curriculamModel.description ? this.curriculamModel.description.split(/\s+/) :0;
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
  btnClick(){
    console.log("Button Clicked")
  }
  


  myfunc(){
     var url=this.curriculamModel.minutesOfMeetingCurriculamCommiteeLink;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }

    myfunc2(){
     var url=this.curriculamModel.curriculamPlanningReleventInfoLink;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
    
  }
       
  public saveCriteria(){
    const acyearsend = {} as Criteria1Model;
    console.log('insidesaave');
    this.servic.addCriteria(this.curriculamModel).subscribe(
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
