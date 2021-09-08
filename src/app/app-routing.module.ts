import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculamEnrichment3Component } from './components/criteria1/curriculam-enrichment3/curriculam-enrichment3.component';
import { CurriculamEnrichment4Component } from './components/criteria1/curriculam-enrichment4/curriculam-enrichment4.component';
import { CurriculamPlanningComponent } from './components/criteria1/curriculam-planning/curriculam-planning.component';
import { FeedBackFromStakeHoldersComponent } from './components/criteria1/feed-back-from-stake-holders/feed-back-from-stake-holders.component';
import { FeedbadFromStakeHolder2Component } from './components/criteria1/feedbad-from-stake-holder2/feedbad-from-stake-holder2.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurriculamPlanning1Component } from './components/criteria1/curriculam-planning1/curriculam-planning1.component';
import { CurriculamPlanning2Component } from './components/criteria1/curriculam-planning2/curriculam-planning2.component';
import { CurriculamPlanning3Component } from './components/criteria1/curriculam-planning3/curriculam-planning3.component';
import { CurriculamPlanning4Component } from './components/criteria1/curriculam-planning4/curriculam-planning4.component';
import { CurriculamPlanning5Component } from './components/criteria1/curriculam-planning5/curriculam-planning5.component';
import { StudentEnrolment1Component } from './components/criteria2/student-enrolment1/student-enrolment1.component';
import { StudentEnrolment2Component } from './components/criteria2/student-enrolment2/student-enrolment2.component';
import { StudentEnrolment3Component } from './components/criteria2/student-enrolment3/student-enrolment3.component';
import { StudentDiversity1Component } from './components/criteria2/student-diversity1/student-diversity1.component';
import { StudentDiversity2Component } from './components/criteria2/student-diversity2/student-diversity2.component';
import { StudentDiversity3Component } from './components/criteria2/student-diversity3/student-diversity3.component';
import { TeachingLearningProcess1Component } from './components/criteria2/teaching-learning-process1/teaching-learning-process1.component';
import { TeachingLearningProcess4Component } from './components/criteria2/teaching-learning-process4/teaching-learning-process4.component';
import { TeachingLearningProcess3Component } from './components/criteria2/teaching-learning-process3/teaching-learning-process3.component';
import { TeachingLearningProcess2Component } from './components/criteria2/teaching-learning-process2/teaching-learning-process2.component';
import { TeacherProfileQuality5Component } from './components/criteria2/teacher-profile-quality5/teacher-profile-quality5.component';
import { TeacherProfileQuality1Component } from './components/criteria2/teacher-profile-quality1/teacher-profile-quality1.component';
import { TeacherProfileQuality2Component } from './components/criteria2/teacher-profile-quality2/teacher-profile-quality2.component';
import { TeacherProfileQuality3Component } from './components/criteria2/teacher-profile-quality3/teacher-profile-quality3.component';
import { TeacherProfileQuality4Component } from './components/criteria2/teacher-profile-quality4/teacher-profile-quality4.component';
import { EvaluationProcess1Component } from './components/criteria2/evaluation-process1/evaluation-process1.component';
import { EvaluationProcess4Component } from './components/criteria2/evaluation-process4/evaluation-process4.component';
import { EvaluationProcess3Component } from './components/criteria2/evaluation-process3/evaluation-process3.component';
import { EvaluationProcess2Component } from './components/criteria2/evaluation-process2/evaluation-process2.component';
import { StudentOutcome1Component } from './components/criteria2/student-outcome1/student-outcome1.component';
import { StudentOutcome2Component } from './components/criteria2/student-outcome2/student-outcome2.component';
import { StudentOutcome3Component } from './components/criteria2/student-outcome3/student-outcome3.component';
import { StudentOutcome4Component } from './components/criteria2/student-outcome4/student-outcome4.component';
import { StaisfactionSurvey1Component } from './components/criteria2/staisfaction-survey1/staisfaction-survey1.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  {path: 'fudocs/second' ,component: CurriculamEnrichment3Component},
  {path: 'fudocs/curriculamEnrichment3' ,component: CurriculamEnrichment3Component},
  {path: 'fudocs/curriculamEnrichment4' ,component: CurriculamEnrichment4Component},
  {path: 'fudocs/feedBack1' ,component: FeedBackFromStakeHoldersComponent},
  {path: 'fudocs/feedBack2' ,component: FeedbadFromStakeHolder2Component},
  {path: '', redirectTo:'/login', pathMatch: 'full'},

  {path: 'fudocs/curriculam1' ,component: CurriculamPlanning1Component},
  {path:'fudocs/curriculam2',component:CurriculamPlanning2Component},
  {path:'fudocs/curriculam3',component:CurriculamPlanning3Component},
  {path:'fudocs/curriculam4',component:CurriculamPlanning4Component},
  {path:'fudocs/curriculam5',component:CurriculamPlanning5Component},

  {path:'criteria2/page1',component:StudentEnrolment1Component},  
  {path:'criteria2/page2',component:StudentEnrolment2Component},
  {path:'criteria2/page3',component:StudentEnrolment3Component},
  {path:'criteria2/page4',component:StudentDiversity1Component},
  {path:'criteria2/page5',component:StudentDiversity2Component},
  {path:'criteria2/page6',component:StudentDiversity3Component},

    
  {path:'criteria2/page7',component:TeachingLearningProcess1Component},
  {path:'criteria2/page8',component:TeachingLearningProcess2Component},
  {path:'criteria2/page9',component:TeachingLearningProcess3Component},
  {path:'criteria2/page10',component:TeachingLearningProcess4Component},
  

  {path:'criteria2/page11',component:TeacherProfileQuality1Component},
  {path:'criteria2/page12',component:TeacherProfileQuality2Component},
  {path:'criteria2/page13',component:TeacherProfileQuality3Component},
  {path:'criteria2/page14',component:TeacherProfileQuality4Component},
  {path:'criteria2/page15',component:TeacherProfileQuality5Component},
  

  {path:'criteria2/page16',component:EvaluationProcess1Component},
  {path:'criteria2/page17',component:EvaluationProcess2Component},
  {path:'criteria2/page18',component:EvaluationProcess3Component},
  {path:'criteria2/page19',component:EvaluationProcess4Component},

  

  {path:'criteria2/page20',component:StudentOutcome1Component},
  {path:'criteria2/page21',component:StudentOutcome2Component},
  {path:'criteria2/page22',component:StudentOutcome3Component},
  {path:'criteria2/page23',component:StudentOutcome4Component},

  
  {path:'criteria2/page24',component:StaisfactionSurvey1Component},






];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
