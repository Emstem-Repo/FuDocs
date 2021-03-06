import { EnrichFieldVisits } from "../interfaces/enrich4";
import { Page2Bos } from "../interfaces/page2-bos";
import { Page3interdisciplinary } from "../interfaces/page3interdisciplinary";
import { Page4enrolment } from "../interfaces/page4enrolment";
import { Page5value } from "../interfaces/page5value";
import { User } from "../interfaces/user";

export class CurriculamPlanningModel {
  public description: string;
  public year: number[];
  public totalNOfStudents: number[];
  public nOfStudents: number[];
  public weblink:string[];
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
  public page8Institutional:File|null;
  public numberOfStudents8:string|'';
  public result8:string|'';
 

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

  //My code


  
    public descriptionn:string |'';
    public minutesMeeting:string|'';
    public relevantInfo1:string|'';

    public yearr:number |'';
    public departmentInfo:{id:number,name:string}[];
    public selectedDepartment:string |'';
    public department:string |'';
    public programInfo:{id:number,name:string}[];
    public selectedProgram:string |'';
    public programme:string | '';
    public date:Date |'';
    public pageFile:File |null;
    public page1File1:File |null;
    public page1File2:File | null;
    public page2File1:File |null;
    public page2File2:File |null;
    public teacherBos:File|null;
    public teacherAcademic:File|null;
    public page3File1:File |null;
    public page3File2:File |null;
    public page3File3:File |null;
    public page3File4:File |null;
    public page3Institutional:File|null;
    public page4File1:File |null;
    public page4File2:File |null;
    public page5File1:File |null;
    public page5File2:File |null;
    public listCourses:string|'';
    public relevantInfo5:string|'';
    public page6File1:File |null;
    public page6File2:File |null;
    public page6File3:File |null;
    public page6File4:File |null;
    public page6Institutional:File|null;

    public noofTeacher1:number |'';
    public noofTeacher2:number |'';
    public noofTeacher3:number |'';
    public noofTeacher4:number |'';
    public noofTeacher5:number |'';


    public page2bos:Page2Bos[];
    public teacherName:{id:number ,name:string}[]
    public nameofBody:string | '';
    public formula1:number |'';
    public page2bos2:Page2Bos[];
    public nameofBody1:number|'';
    public formula2:number|'';
    public coursesOffered:number|'';

    public trainingOffered:number | '';
    public formula3:number | '';
    public interDisciplinary:string|'';

    public page3inter:Page3interdisciplinary[];
    public inter: number| '';
    public progg:string|'';

    public page4enrol:Page4enrolment[];
    public enrol:number|'';
    public formula4:number|'';
    public curiculamFile:File | null;

    public page5val: Page5value[];
     public valueaddedOffered:number[];
     public usermod:User;

    
  



  constructor() {
    this.description = '';
    //this.year=[];
    this.totalNOfStudents = [];
    this.nOfStudents = [];
    this.weblink=[];
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
    this.page8Institutional=null;
    this.numberOfStudents8='';
    this.result8='';
    
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

    //my code

    this.descriptionn = '';
    this.minutesMeeting='';
    this.relevantInfo1='';
        this.yearr='';
        this.departmentInfo=[{ id: 1, name: 'Accounts' }, { id: 2, name: 'Fees' }, { id: 3, name: 'IT'}, { id: 4, name: 'Office Administration' },{ id: 5, name: 'Anatomy' },{ id: 6, name: 'Physiology'},{ id: 5, name: 'BioChemistry' },{ id: 6, name: 'Pathalogy'}];
        this.selectedDepartment='';
        this.department='';
        this.programInfo=[{ id: 1, name: 'MBBS' }, { id: 2, name: 'BDS' }, { id: 3, name: 'BAMS'}, { id: 4, name: 'BHMS' },{ id: 5, name: 'BUMS' },{ id: 6, name: 'BNYS' }];
        this.selectedProgram='';
        this.programme='';
        this.date='';
        this.pageFile=null;
        this.page1File1=null;
        this.page1File2=null;
        this.page2File1=null;
        this.page2File2=null;
        this.teacherBos=null;
        this.teacherAcademic=null;
        this.page3File1=null;
        this.page3File2=null;
        this.page3File3=null;
        this.page3File4=null;
        this.page3Institutional=null;
        this.page4File1=null;
        this.page4File2=null;
        this.page5File1=null;
        this.page5File2=null;
        this.listCourses='';
        this.relevantInfo5='';
        this.page6File1=null;
        this.page6File2=null;
        this.page6File3=null;
        this.page6File4=null;
        this.page6Institutional=null;
        this.noofTeacher1='';
        this.noofTeacher2='';
        this.noofTeacher3='';
        this.noofTeacher4='';
        this.noofTeacher5='';

        this.page2bos=[{
            year:'',
            nameOfTeacher:'',
            nameOfBody:'',
            
        }]
        this.teacherName= [{ id: 1, name: 'John' }, { id: 2, name: 'Elle' }, { id: 3, name: 'Chris'}, { id: 4, name: 'Richard' },{ id: 5, name: 'Alex' },{ id: 6, name: 'Nairobi' }];
        this.nameofBody='';
        this.formula1='';


        this.page2bos2=[{
            year:'',
            nameOfTeacher:'',
            nameOfBody:'',
            
        }]
        this.nameofBody1='';
        this.formula2='';
        this.coursesOffered='';
        this.trainingOffered='';
        this.formula3='';
        this.interDisciplinary='';

        this.page3inter=[{
            year : '',
            nameOfprogram:[0],
            interDisciplinary: ['']
        }
        ]
        this.inter= '';
        this.progg='';

        this.page4enrol=[{
            yearOfEnrol: '',
            studentsEnrol:'',
            totalStudents:'',
            uploadDocs: null,
        }];
        this.enrol='';
        this.formula4='';
        this.curiculamFile=null;

        this.page5val=[{
            valueAdded:'',
            courseCode: '',
            yearOfOffering: '',
            courseOccured:'',
            noOfStudents: '',
            uploadDoc: null
        }]

        this.valueaddedOffered=[];

        this.usermod={
          id:0,
          name:'',
          userName:'',
          password:''
        }
  }
}




