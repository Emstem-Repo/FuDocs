import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-curriculam-planning5',
  templateUrl: './curriculam-planning5.component.html',
  styleUrls: ['./curriculam-planning5.component.css']
})
export class CurriculamPlanning5Component implements OnInit {

  toogle:boolean=true;
  wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
  file!: File;
  fileError = false;

  curriculamModel=this.cservice.curriculamModel;

  // addMore():void{
  //   this.curriculamModel.page5val.push(
  //     {
  //       valueAdded:'',
  //   courseCode: '',
  //   yearOfOffering: '',
  //   courseOccured: '',
  //   noOfStudents: '',
  //   uploadDoc: null
  //     }
  //   )
  // }

  constructor(private cservice:Critera1Service) { }

  ngOnInit(): void {
  }

    
  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.curriculamModel.curriculamEnrichmentDescription ? this.curriculamModel.curriculamEnrichmentDescription.split(/\s+/) :0;
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

  myfunc(){
     var url=this.curriculamModel.curriculamEnrichListOfCoursesLink;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }

   myfunc2(){
     var url=this.curriculamModel.curriculamEnrichmentReleventInfoLink;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }


}
