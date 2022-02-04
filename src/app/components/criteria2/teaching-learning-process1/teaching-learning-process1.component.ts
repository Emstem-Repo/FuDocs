import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-teaching-learning-process1',
  templateUrl: './teaching-learning-process1.component.html',
  styleUrls: ['./teaching-learning-process1.component.css']
})
export class TeachingLearningProcess1Component implements OnInit {

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

  @ViewChild("descripId") descrip!: ElementRef;
  wordCounter(){
    this.wordCount=this.teachinglearning.descriptionn ? this.teachinglearning.descriptionn.split(/\s+/) :0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if(this.words < 100)
      this.descMin=true;
    else this.descMin=false;
    if(this.words>500)
      this.descMax=true;
    else this.descMax=false;  
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

   myfunc(){
     var url=this.teachinglearning.reportURL1;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }

     myfunc2(){
     var url=this.teachinglearning.relevantInfo1;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }


}
