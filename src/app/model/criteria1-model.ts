import { fileValidatorDirective } from "../directive/file-validator-directive";
import { EnrichFieldVisits } from "../interfaces/enrich4";
import { Page2Bos } from "../interfaces/page2-bos";
import { Page3interdisciplinary } from "../interfaces/page3interdisciplinary";
import { Page4enrolment } from "../interfaces/page4enrolment";
import { Page5value } from "../interfaces/page5value";

export class Criteria1Model {
    public description!:string |'';
    public minutesOfMeetingCurriculamCommiteeLink!:string|'';
    public curriculamPlanningReleventInfoLink!:string|'';
    public minutesOfMeetingCurriculamCommiteeFile!:File |null;
    public curriculamPlanningReleventInfoFile!:File | null;
    //1.1.2
    public noofTeacher1!:number |'';
    public noofTeacher2!:number |'';
    public noofTeacher3!:number |'';
    public noofTeacher4!:number |'';
    public noofTeacher5!:number |'';
    public teacherBosParticipatedInbos!:File|null;
    public teacherBosParticipatedInbonum!:Page2Bos[];
    public teacherName!:{id:number ,name:string}[];
    public formula1!:number |'';
    public teacherAcademic!:File|null;
    public teacherparticipatedinAcademiccouncilnum!:Page2Bos[];
    public formula2!:number|'';
    public Scannedcopiesoflettersofsupportingofteachers!:File |null;
    public participationreleventInfo!:File |null;
    //1.2
    public year: string[];
    public coursesOfferedDuringLastYear!:string;
    public trainingOfferedLastFiveYear!:string;
    public formula3!:number;
    public institutionalDataPrescribed!:File;
    public institutionalData:Page3interdisciplinary[];
    public programInfo:{id:number,name:string}[];
    public listOfProgrammesDuringLastFiveYears!:File
    public listOfCoursesTrainingWereOfferedYarWise!:File;
    public minutesOfRelevantAcademicCouncilMeetings!:File;
    public departmentTrainingOtherRelevantInfo!:File;

    //component 1.2.2
    public coursesvstotalstudents:Page4enrolment[];
    public formula4!:string;
    public studentsEnrolledInTheValueAddedCourses!:File;
    public coursesvstotalstudentsReleventInfo!:File;

    //component 1.3.1
    public curriculamEnrichmentDescription!:string;
    public curriculamEnrichListOfCoursesLink!:string;
    public curriculamEnrichListOfCoursesFile!:File;
    public curriculamEnrichmentReleventInfoLink!:string;
    public curriculamEnrichListOfReleventInfoFile!:File;
    //component 1.3.2
    public valueaddedOffered:number[];
    public valueAddedCoureseInstitutionalFile!:File;
    public valueAddedCoureseInstitutionalList: Page5value[];
    public brochureOrOtherDocumentsOfvalueAddedCourses!:File;
    public valueAddedCouresesLastFiveYear!:File;
    public valueAddedCouresesStudentList!:File;
    public valueAddedCouresesReleventInfo!:File;
    //component 1.3.3
    public nOfStudentsOfavrgValueAdded: number[];
    public totalNOfStudentsOfavrgValueAdded:number[];
    public nOfStudentsOfavrgValueAddedLink:string[];
    public averageFormulaResult!:string;
    public detailsOfstudentsEnrolledInValueAdded!:File;
    public detailsOfstudentsEnrolledInValueAddedreleventInfo!:File;

    //component 1.3.4
    public percentageOfStudentsFieldVisitFile!:File;
    public fieldVisitList: EnrichFieldVisits[];
    public program: { id: number, name: string, }[];
    public totalNostudUndertakingVisits!:number;
    public totalNostudUndertakingClinicaalVisits!:number
    public totalNostudUndertakingResearchProject!: number;
    public totalNostudUndertakingIndustryVisits!: number;
    public totalNostudUndertakingCommunityPosting!:number;
    public totalNostudUndertakingInAll!:number;
    public docShownostudUndertakingInAll!: File;
    public nostudUndertakingInAll!: File;
    public fieldVisitReleventInfo!: File;
    public totNoresult!:string;
    public formulafieldVisit!:string;

    //component 1.4.1
    public structerdFeedBackStudent!:boolean;
    public structeredFeedBackTeachers!:boolean;
    public structeredFeedBackEmployers!:boolean;
    public structeredFeedBackAlumni!:boolean;
    public structeredFeedBackProfessionals!:boolean;
    public structeredFeeBackLink!:string;
    public structeredFeeBackFile!:File;
    public structeredFeeBackRelevent!:File;

    //component 1.4.2
    public feedBackwebSite!:boolean;
    public feedbackCollectAnalyzeAction!:boolean;
    public feedbackCollectAnalyze!:boolean;
    public feedbackCollect!:boolean;
    public optionsBasedFeeBackLink!:string;
    public optionsBasedFeeBackFile!:File;
    public optionsBasedFeeBackRelevent!:File;



    constructor(){

        this.year=[];
         this.teacherBosParticipatedInbonum=[{
            year:'',
            nameOfTeacher:'',
            nameOfBody:'',
        }];
            
        this.teacherName= [{ id: 1, name: 'John' }, { id: 2, name: 'Elle' }, { id: 3, name: 'Chris'}, { id: 4, name: 'Richard' },{ id: 5, name: 'Alex' },{ id: 6, name: 'Nairobi' }];
       
        this.teacherparticipatedinAcademiccouncilnum=[{
            year:'',
            nameOfTeacher:'',
            nameOfBody:'',
            
        }];
        this.institutionalData=[{
            year : '',
            nameOfprogram:[0],
            interDisciplinary: ['']
        }
        ];
        this.programInfo=[{ id: 1, name: 'MBBS' },
         { id: 2, name: 'BDS' }, { id: 3, name: 'BAMS'},
          { id: 4, name: 'BHMS' },{ id: 5, name: 'BUMS' },
          { id: 6, name: 'BNYS' }];

          this.coursesvstotalstudents=[{
            yearOfEnrol: '',
            studentsEnrol:'',
            totalStudents:'',
            uploadDocs: null,
        }];  
        this.valueaddedOffered=[];
        this.valueAddedCoureseInstitutionalList=[{
            valueAdded:'',
            courseCode: '',
            yearOfOffering: '',
            courseOccured:'',
            noOfStudents: '',
            uploadDoc: null
        }];
        this.nOfStudentsOfavrgValueAdded = [];
        this.totalNOfStudentsOfavrgValueAdded=[];
        this.nOfStudentsOfavrgValueAddedLink=[];
        this.fieldVisitList = [{
            programId: '',
            nostudUndertakingVisits: '',
            nostudUndertakingClinicaalVisits: '',
            nostudUndertakingResearchProject: '',
            nostudUndertakingIndustryVisits: '',
            nostudUndertakingCommunityPosting: '',
            nostudUndertakingInAll: '',
          }];
          this.program = [{ id: 1, name: 'botony' }, { id: 2, name: 'zoology' }, { id: 3, name: 'anatomy' }, { id: 4, name: 'surger' }];
    }
}
