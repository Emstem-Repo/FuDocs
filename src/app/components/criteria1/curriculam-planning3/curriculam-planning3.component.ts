import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';

@Component({
  selector: 'app-curriculam-planning3',
  templateUrl: './curriculam-planning3.component.html',
  styleUrls: ['./curriculam-planning3.component.css']
})
export class CurriculamPlanning3Component implements OnInit {
  file!: File;
  fileError = false;
  changeText: boolean;
  
  curriculamModel=new CurriculamPlanningModel();

  addMore():void{
    this.curriculamModel.page3inter.push(
      {
        year: '',
        nameOfprogram: [0],
        interDisciplinary: ['']}
    )
  }

  addMoreProg(index:number):void{
    console.log(index);
    var i:number=0;
    this.curriculamModel.page3inter.forEach(element => {
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
      console.log(this.curriculamModel.page3inter.length)
      if(this.curriculamModel.page3inter.length > 1){
     this.curriculamModel.page3inter.pop();
    }
  }

  addInter(index:number):void{
    console.log(index);
    var i: number=0;
    this.curriculamModel.page3inter.forEach(element =>{
      if(index==i){
        element.interDisciplinary.push(
          ''
        )
      }
      i++;
      console.log(element.interDisciplinary);
    })
  }
  


  


  constructor() {
    this.changeText = false;
   }

  ngOnInit(): void {
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
