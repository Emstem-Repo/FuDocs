import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { NgModel } from '@angular/forms';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-curriculam-enrichment3',
  templateUrl: './curriculam-enrichment3.component.html',
  styleUrls: ['./curriculam-enrichment3.component.css']
})
export class CurriculamEnrichment3Component implements OnInit {

  curriculamModel=new CurriculamPlanningModel();

  
  fileError=false;

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

    // console.log(file.size>1000000);
    // if(file.size>1000000)
    //     this.fileError=true;
    // else this.fileError=false;
    
  }
}
