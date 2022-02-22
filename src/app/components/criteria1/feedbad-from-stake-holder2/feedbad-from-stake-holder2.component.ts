import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-feedbad-from-stake-holder2',
  templateUrl: './feedbad-from-stake-holder2.component.html',
  styleUrls: ['./feedbad-from-stake-holder2.component.css']
})
export class FeedbadFromStakeHolder2Component implements OnInit {
  file!: File;
  fileError=false;

  curriculamModel=this.cservice.curriculamModel;

  constructor(private cservice:Critera1Service) { }

  ngOnInit(): void {
  }
  fileValidation(event:any) {
    this.file = event.target.files[0];
    console.log('inside change event  '+this.file.size)
    console.log(this.file.size>1000000);
    if(this.file.size>1000000)
        this.fileError=true;
    else this.fileError=false;
    
  }

}
