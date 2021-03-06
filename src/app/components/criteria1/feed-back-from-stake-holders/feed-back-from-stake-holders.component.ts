import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-feed-back-from-stake-holders',
  templateUrl: './feed-back-from-stake-holders.component.html',
  styleUrls: ['./feed-back-from-stake-holders.component.css']
})
export class FeedBackFromStakeHoldersComponent implements OnInit {
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
