import { EnrichFieldVisits } from "../interfaces/enrich4";

export class CurriculamPlanningModel {
  public description: string;
  public year: number[];
  public totalNOfStudents: number[];
  public nOfStudents: number[];
  public formulaResult: number | '';
  public detOfStudEnrolled: File | null;
  public enrichmenntRelev: File | null;
  public programId: number | '';
  public program: { id: number, name: string, }[];
  public enrichArry: EnrichFieldVisits[];
  public totalNostudUndertakingVisits:number | '';
  public totalNostudUndertakingClinicaalVisits: number | '';
  public totalNostudUndertakingResearchProject: number | '';
  public totalNostudUndertakingIndustryVisits: number | '';
  public totalNostudUndertakingCommunityPosting: number | '';
  public totalNostudUndertakingInAll: number | '';
  public docShownostudUndertakingInAll: File | null;
  public nostudUndertakingInAll: File | null;
  public anyReleventInfo: File | null;

  //feed back
  public feedBackStudent:boolean |'';
  public feedBackTeachers:boolean |'';
  public feedBackEmployers:boolean |'';
  public feedBackAlumni:boolean |'';
  public feedBackProfessionals:boolean |'';
  public feedAnyReleventInfo: File | null;
  public feedbackReports: File | null;
  public reportURL:boolean | '';
  
  //feed back component 2
  public feedbackResultOnWebsite:boolean | '';
  public feedBackCollectedAndActionTaken:boolean | '';
  public feedBackCollectedAndAnalysed:boolean | '';
  public feedbackCollected:boolean | '';
  public feedbackResultURL:string | '';
  public actionTakenFeedbackReports: File | null;
  public feedBack2ReleventIno: File | null;
  



  constructor() {
    this.description = '';
    //this.year=[];
    this.totalNOfStudents = [];
    this.nOfStudents = [];
    this.formulaResult = '';
    this.detOfStudEnrolled = null;
    this.enrichmenntRelev = null;
    this.year = [2017, 2018, 2019, 2020, 2021];
    this.programId = '';
    this.program = [{ id: 1, name: 'botony' }, { id: 2, name: 'zoology' }, { id: 3, name: 'anatomy' }, { id: 4, name: 'surger' }];
    this.enrichArry = [{
      programId: '',
      nostudUndertakingVisits: '',
      nostudUndertakingClinicaalVisits: '',
      nostudUndertakingResearchProject: '',
      nostudUndertakingIndustryVisits: '',
      nostudUndertakingCommunityPosting: '',
      nostudUndertakingInAll: '',
    }];
    this.totalNostudUndertakingVisits=0;
    this.totalNostudUndertakingClinicaalVisits=0;
    this.totalNostudUndertakingResearchProject=0;
    this.totalNostudUndertakingIndustryVisits=0;
    this.totalNostudUndertakingCommunityPosting=0;
    this.totalNostudUndertakingInAll=0;
    this.docShownostudUndertakingInAll=null;
    this.nostudUndertakingInAll=null;
    this.anyReleventInfo=null;
    
    ///feed back component
    this.feedBackStudent='';
    this.feedBackTeachers='';
    this.feedBackEmployers='';
    this.feedBackAlumni='';
    this.feedBackProfessionals='';
    this.feedAnyReleventInfo=null;
    this.feedbackReports=null;
    this.reportURL='';
    //feed back component 2
    this.feedbackResultOnWebsite='';
    this.feedBackCollectedAndActionTaken='';
    this.feedBackCollectedAndAnalysed=''
    this.feedbackCollected='';
    this.feedbackResultURL='';
    this.actionTakenFeedbackReports=null;
    this.feedBack2ReleventIno=null;

  }
}




