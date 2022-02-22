import { Component, OnInit } from '@angular/core';
import { CurriculamPlanningModel } from 'src/app/model/curriculam-planning-model';
import { Critera1Service } from 'src/app/service/critera1.service';

@Component({
  selector: 'app-curriculam-enrichment4',
  templateUrl: './curriculam-enrichment4.component.html',
  styleUrls: ['./curriculam-enrichment4.component.css']
})
export class CurriculamEnrichment4Component implements OnInit {
  

  curriculamModel=this.cservice.curriculamModel;
  el_name:String='';
  studentsNo:Number=0;
  file!: File;
  fileError=false;
  changeText: boolean;
  
  constructor(private cservice:Critera1Service) { 
    this.changeText = false;
  }

  ngOnInit(): void {
    if(this.curriculamModel.year.length==0){
      this.cservice.getAcademicYear();
    }
  }
  addMore():void{
    this.curriculamModel.fieldVisitList.push({
     programId: '',
     nostudUndertakingVisits:'',
     nostudUndertakingClinicaalVisits: '',
     nostudUndertakingResearchProject: '',
     nostudUndertakingIndustryVisits: '',
     nostudUndertakingCommunityPosting: '',
     nostudUndertakingInAll: '',

    })
  }

   del():void{
      console.log(this.curriculamModel.fieldVisitList.length)
      if(this.curriculamModel.fieldVisitList.length > 1){
     this.curriculamModel.fieldVisitList.pop();
    }
  }
  calculateTotal(element:any){
    this.el_name=element.name.slice(0,-2);
    this.studentsNo=0;
    console.log(this.el_name);
    if(this.el_name=='nostudUndertakingVisits' && element.value!=0){
     this.curriculamModel.fieldVisitList.forEach(element => {
        console.log(element.nostudUndertakingVisits);
        this.studentsNo=Number(this.studentsNo)+Number(element.nostudUndertakingVisits)
        this.curriculamModel.totalNostudUndertakingVisits=Number(this.studentsNo);
      });
    }
    else if(this.el_name=='nostudUndertakingClinicaalVisits' && element.value!=0){
      this.curriculamModel.fieldVisitList.forEach(element => {
         console.log(element.nostudUndertakingVisits);
         this.studentsNo=Number(this.studentsNo)+Number(element.nostudUndertakingClinicaalVisits)
         this.curriculamModel.totalNostudUndertakingClinicaalVisits=Number(this.studentsNo);
       });
     }
     else if(this.el_name=='nostudUndertakingResearchProject' && element.value!=0){
      this.curriculamModel.fieldVisitList.forEach(element => {
         console.log(element.nostudUndertakingVisits);
         this.studentsNo=Number(this.studentsNo)+Number(element.nostudUndertakingResearchProject)
         this.curriculamModel.totalNostudUndertakingResearchProject=Number(this.studentsNo);
       });
     }
    else if(this.el_name=='nostudUndertakingIndustryVisits' && element.value!=0){
      this.curriculamModel.fieldVisitList.forEach(element => {
         console.log(element.nostudUndertakingVisits);
         this.studentsNo=Number(this.studentsNo)+Number(element.nostudUndertakingIndustryVisits)
         this.curriculamModel.totalNostudUndertakingIndustryVisits=Number(this.studentsNo);
       });
     }
     else if(this.el_name=='nostudUndertakingCommunityPosting' && element.value!=0){
      this.curriculamModel.fieldVisitList.forEach(element => {
         console.log(element.nostudUndertakingVisits);
         this.studentsNo=Number(this.studentsNo)+Number(element.nostudUndertakingCommunityPosting)
         this.curriculamModel.totalNostudUndertakingCommunityPosting=Number(this.studentsNo);
       });
     }
     else if(this.el_name=='nostudUndertakingInAll' && element.value!=0){
      this.curriculamModel.fieldVisitList.forEach(element => {
         console.log(element.nostudUndertakingVisits);
         this.studentsNo=Number(this.studentsNo)+Number(element.nostudUndertakingInAll)
         this.curriculamModel.totalNostudUndertakingInAll=Number(this.studentsNo);
       });
     }
    
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
