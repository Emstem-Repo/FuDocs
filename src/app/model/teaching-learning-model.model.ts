import { StudentMentorRatio } from "../interfaces2/student-mentor-ratio";
import { StudentTeacherRatio } from "../interfaces2/student-teacher-ratio";
import { Studentenrol2 } from "../interfaces2/studentenrol2";

export class TeachingLearningModel {

    
    public academicYear:number[];
    public nOfStudents: number[];
    public page1Institutional:File|null;
    public page1File1:File |null;
    public seatsOfSC: number[];
    public seatsOfST: number[];
    public seatsOfOBC:number[];
    public seatsOfOthers:number[];
    public seatsOfOthers1:number[];
    public studentsOfSC:number[];
    public studentsOfST:number[];
    public studentsOfOBC:number[];
    public studentsOfOthers:number[];
    public studentsOfOthers1:number[];

    public relevantFile1:File |null;
    public studentEnrolment: Studentenrol2[];
    public programId:{id:number,name:string}[];
    public page2File1:File|null;
    public page2File2:File|null;
    public relevantFile2:File|null;
    public seatsFilledUG:number[];
    public seatsFilledPG:number[];
    public seatsFilledSS:number[];
    public seatsApprovedUG:number[];
    public seatsApprovedPG:number[];
    public seatsApprovedSS:number[];


    public studentsOtherState:number[];
    public noStudentsSpecifiedYear:number[];
    public page3File1:File|null;
    public page3File2:File|null;
    public page3File3:File|null;
    public relevantFile3:File|null;


    public page4File1:File|null;
    public page4File2:File|null;
    public page4File3:File|null;
    public relevantFile4:File|null;


    public stuTeaRatio: StudentTeacherRatio[];

    public page5File1:File|null;
    public page5File2:File|null;
    public relevantFile5:File|null;



    public description: string;
    public reportURL:string|'';
    public relevantInfo:string|'';


    public descriptionn:string;
    public reportURL1:string|'';
    public relevantInfo1:string|'';




    public modelsTrainers:boolean |'';
    public advanceStimulators:boolean|'';
    public structuredPrograms:boolean|'';
    public trainingPrograms:boolean|'';
    public page8File1:File|null;
    public page8File2:File|null;
    public page8File3:File|null;
    public relevantFile8:File|null;



    public description1:string |'';
    public itcEnableDetails:string|'';
    public itcEnableTeachers:string|'';    
    public lmsSystem:string|'';
    public relevantInfo2:string|'';



    public stuMentorRatio: StudentMentorRatio[];
    public page10File1:File|null;
    public page10File2:File|null;
    public page10File3:File|null;
    public relevantFile10:File|null;



    public noOfFullTimeTeachers:number[];
    public noOfsanctionedPost:number[];
    public page11File1:File|null;
    public page11File2:File|null;
    public page11File3:File|null;
    public page11File4:File|null;
    public relevantFile11:File|null;


    public ftTeachersPhd:number[];
    public nofulltTeachers: number[];
    public page12File1:File|null;
    public page12File2:File|null;
    public page12File3:File|null;
    public relevantFile12:File|null;



    public page13File1:File|null;
    public relevantFile13:File|null;

   
    public totalNoTeachers:number[];
    public noTeachersTrained: number[];
    public page14File1:File|null;
    public page14File2:File|null;
    public page14File3:File|null;
    public page14File4:File|null;
    public relevantFile14:File|null;
    public heiWebsite:string|'';

    
    

    public noteachersAwarded:number[];
    public fullTimeTeachersNo: number[];
    public page15File1:File|null;
    public page15File2:File|null;
    public page15File3:File|null;
    public relevantFile15:File|null;




    public description2:string|'';
    public academicCalendar:string|'';
    public assesmentDates:string|'';
    public page16File1:File|null;



    public description3:String|'';
    public page17File1:File|null;
    public page17File2:File|null;
    public relevantFile17:File|null;



    public description4:string|'';
    public examReforms:string|'';
    public relevantFile18:File|null;
    public relevantInfo18:string|'';



    public page19File1:File|null;
    public page19File2:File|null;
    public page19File3:File|null;
    public page19File4:File|null;
    public relevantFile19:File|null;

    


    public description5:string|'';
    public learningOutcomesDocs:string|'';
    public learningOutcomesMethod:string|'';
    public courseOutcomes:string|'';
    public relevantInfo20:string|'';



    public finalYearUG:number[];
    public finalYearPG:number[];
    public studentUGPG:number[];
    public page21File1:File|null;
    public page21File2:File|null;
    public page21File3:File|null;
    public page21File4:File|null;
    public relevantFile21:File|null;



    public description6:String|'';
    public learningOutcomes:string|'';
    public relevantInfo21:string|'';



    public description7:string|'';
    public pTMeeting:string|'';
    public followUpReports:string|'';
    public relevantInfo23:string|'';


    public page24File1:File|null;
    public relevantInfo24:string|'';

   
    //new













    





    constructor(){
        this.academicYear=[2021,2020,2019,2018,2017];
        this.nOfStudents = [];
        this.page1Institutional=null;
        this.page1File1=null;
        this.seatsOfSC = [];
        this.seatsOfST =[];
        this.seatsOfOBC =[];
        this.seatsOfOthers=[];
        this.seatsOfOthers1=[];
        this.studentsOfSC=[];
        this.studentsOfST=[];
        this.studentsOfOBC=[];
        this.studentsOfOthers=[];
        this.studentsOfOthers1=[];


        this.relevantFile1=null;
        this.studentEnrolment=[{
            year:'',
            programCode:[0] ,
            noOfSeatsAvailable:'',
            noOfStudentsEnrolled:''

        }];

        

        this.programId = [{ id: 1, name: '101' }, { id: 2, name: '102' }, { id: 3, name: '103' }, { id: 4, name: '104' }];
        this.page2File1=null;
        this.page2File2=null;
        this.relevantFile2=null;
        this.seatsFilledUG=[];
        this.seatsFilledPG=[];
        this.seatsFilledSS=[];
        this.seatsApprovedUG=[];
        this.seatsApprovedPG=[];
        this.seatsApprovedSS=[];


        this.studentsOtherState=[];
        this.noStudentsSpecifiedYear=[];
        this.page3File1=null;
        this.page3File2=null;
        this.page3File3=null;
        this.relevantFile3=null;
        

        this.page4File1=null;
        this.page4File2=null;
        this.page4File3=null;
        this.relevantFile4=null;



        this.stuTeaRatio=[{
            noStudentsEnrolledUG:'',
            noStudentsEnrolledPG:'',
            noFullTimeTeachers:'',
            studentRatio:'',
            teacherRatio:''
        }]
        this.page5File1=null;
        this.page5File2=null;
        this.relevantFile5=null;


       
        this.description = '';
        this.reportURL='';
        this.relevantInfo='';


        this.descriptionn='';
        this.reportURL1='';
        this.relevantInfo1='';





        this.modelsTrainers='';
        this.advanceStimulators='';
        this.structuredPrograms='';
        this.trainingPrograms='';
        this.page8File1=null;
        this.page8File2=null;
        this.page8File3=null;
        this.relevantFile8=null;

    




        this.description1 = '';
        this.itcEnableDetails = '';
        this.itcEnableTeachers = '';
        this.lmsSystem = '';
        this.relevantInfo2 = '';



        this.stuMentorRatio=[{
            noOfFTTeachers:'',
            noStudentsEnroll:'',
            noStudentsAssignToMentor:'',
            mentorRatio:''
        }]
        this.page10File1=null;
        this.page10File2=null;
        this.page10File3=null;
        this.relevantFile10=null;



        this.noOfsanctionedPost=[];
        this.noOfFullTimeTeachers=[];
        this.page11File1=null;
        this.page11File2=null;
        this.page11File3=null;
        this.page11File4=null;
        this.relevantFile11=null;


        this.ftTeachersPhd=[];
        this.nofulltTeachers=[];
        this.page12File1=null;
        this.page12File2=null;
        this.page12File3=null;
        this.relevantFile12=null;

        this.page13File1=null;
        this.relevantFile13=null;


     

        this.totalNoTeachers=[];
        this.noTeachersTrained=[];
        this.page14File1=null;
        this.page14File2=null;
        this.page14File3=null;
        this.page14File4=null;
        this.relevantFile14=null;
        this.heiWebsite='';



        this.noteachersAwarded=[];
        this.fullTimeTeachersNo=[];
        this.page15File1=null;
        this.page15File2=null;
        this.page15File3=null;
        this.relevantFile15=null;


        
        this.description2='';
        this.academicCalendar='';
        this.assesmentDates='';
        this.page16File1=null;



        this.description3='';
        this.page17File1=null;
        this.page17File2=null;
        this.relevantFile17=null;


        this.description4='';
        this.examReforms='';
        this.relevantFile18=null;
        this.relevantInfo18='';


        this.page19File1=null;
        this.page19File2=null;
        this.page19File3=null;
        this.page19File4=null;
        this.relevantFile19=null;


        this.description5='';
        this.learningOutcomesDocs = '';
        this.learningOutcomesMethod = '';
        this.courseOutcomes = '';
        this.relevantInfo20 = '';


        this.finalYearUG=[];
        this.finalYearPG=[];
        this.studentUGPG=[];
        this.page21File1=null;
        this.page21File2=null;
        this.page21File3=null;
        this.page21File4=null;
        this.relevantFile21=null;



        this.description6='';
        this.learningOutcomes='';
        this.relevantInfo21='';
        
    


        this.description7='';
        this.pTMeeting='';
        this.followUpReports='';
        this.relevantInfo23='';


        this.page24File1=null;
        this.relevantInfo24='';




        
        
    


        



        
    }
}
