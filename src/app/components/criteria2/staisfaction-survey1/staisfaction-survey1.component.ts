import { Component, OnInit } from '@angular/core';
import { TeachingLearningModel } from 'src/app/model/teaching-learning-model.model';

@Component({
  selector: 'app-staisfaction-survey1',
  templateUrl: './staisfaction-survey1.component.html',
  styleUrls: ['./staisfaction-survey1.component.css']
})
export class StaisfactionSurvey1Component implements OnInit {

  fileError=false;
   changeText: boolean;
  teachinglearning = new TeachingLearningModel();

  constructor() {
    this.changeText=false;
  }

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

  
  myfunc(){
     var url=this.teachinglearning.relevantInfo24;
    
	var browserName=navigator.appName; 
		window.open(url,"verifyy","left=20,top=20,width=900,height=900,toolbar=1,resizable=0,scrollbars=1");
       
    
  }


}
