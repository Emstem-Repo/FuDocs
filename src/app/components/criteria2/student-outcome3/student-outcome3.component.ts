import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-student-outcome3',
  templateUrl: './student-outcome3.component.html',
  styleUrls: ['./student-outcome3.component.css']
})
export class StudentOutcome3Component implements OnInit {
  wordCount:any;
  words:any;
  descMin= false;
  descMax = false;
  fileError=false;
  toogle:boolean=true;
  teachinglearning = new TeachingLearningModel();

  constructor() { }

  ngOnInit(): void {
  }

  fileValidation(event:any):boolean {
    var file: File = event.target.files[0];
    console.log(event.target);
    if(file.size>1000000){
        //this.fileError=true;
        return true;
    }
    else {
        this.fileError=false;
        return false;
    }
  }

  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.teachinglearning.description6 ? this.teachinglearning.description6.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
  }

    myfunc(){
     var url=this.teachinglearning.learningOutcomes;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }

    myfunc2(){
     var url=this.teachinglearning.relevantInfo21;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }

}
