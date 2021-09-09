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

}
