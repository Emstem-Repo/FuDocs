import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculamPlanningComponent } from './components/criteria1/curriculam-planning/curriculam-planning.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { CurriculamEnrichment3Component } from './components/criteria1/curriculam-enrichment3/curriculam-enrichment3.component';
import { fileValidatorDirective } from './directive/file-validator-directive';
import { fileValidatorDirectiveSize } from './directive/file-validator-directive-size';
import { CurriculamEnrichment4Component } from './components/criteria1/curriculam-enrichment4/curriculam-enrichment4.component';
import { FeedBackFromStakeHoldersComponent } from './components/criteria1/feed-back-from-stake-holders/feed-back-from-stake-holders.component';
import { FeedbadFromStakeHolder2Component } from './components/criteria1/feedbad-from-stake-holder2/feedbad-from-stake-holder2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
import { TeachingLearningProcess2Component } from './components/criteria2/teaching-learning-process2/teaching-learning-process2.component';
import { TeachingLearningProcess3Component } from './components/criteria2/teaching-learning-process3/teaching-learning-process3.component';
import { TeachingLearningProcess4Component } from './components/criteria2/teaching-learning-process4/teaching-learning-process4.component';
import { TeacherProfileQuality1Component } from './components/criteria2/teacher-profile-quality1/teacher-profile-quality1.component';
import { TeacherProfileQuality2Component } from './components/criteria2/teacher-profile-quality2/teacher-profile-quality2.component';
import { TeacherProfileQuality3Component } from './components/criteria2/teacher-profile-quality3/teacher-profile-quality3.component';
import { TeacherProfileQuality4Component } from './components/criteria2/teacher-profile-quality4/teacher-profile-quality4.component';
import { TeacherProfileQuality5Component } from './components/criteria2/teacher-profile-quality5/teacher-profile-quality5.component';
import { EvaluationProcess1Component } from './components/criteria2/evaluation-process1/evaluation-process1.component';
import { EvaluationProcess2Component } from './components/criteria2/evaluation-process2/evaluation-process2.component';
import { EvaluationProcess3Component } from './components/criteria2/evaluation-process3/evaluation-process3.component';
import { EvaluationProcess4Component } from './components/criteria2/evaluation-process4/evaluation-process4.component';
import { StudentOutcome1Component } from './components/criteria2/student-outcome1/student-outcome1.component';
import { StudentOutcome2Component } from './components/criteria2/student-outcome2/student-outcome2.component';
import { StudentOutcome3Component } from './components/criteria2/student-outcome3/student-outcome3.component';
import { StudentOutcome4Component } from './components/criteria2/student-outcome4/student-outcome4.component';
import { StaisfactionSurvey1Component } from './components/criteria2/staisfaction-survey1/staisfaction-survey1.component';
import { CurriculamPlanning6Component } from './components/criteria1/curriculam-planning6/curriculam-planning6.component';


@NgModule({
  declarations: [
    AppComponent,
    CurriculamPlanningComponent,
    CurriculamEnrichment3Component,
    fileValidatorDirective,
    CurriculamEnrichment4Component,
    FeedBackFromStakeHoldersComponent,
    FeedbadFromStakeHolder2Component,
    fileValidatorDirectiveSize,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    CurriculamPlanning1Component,
    CurriculamPlanning2Component,
    CurriculamPlanning3Component,
    CurriculamPlanning4Component,
    CurriculamPlanning5Component,
    StudentEnrolment1Component,
    StudentEnrolment2Component,
    StudentEnrolment3Component,
    StudentDiversity1Component,
    StudentDiversity2Component,
    StudentDiversity3Component,
    TeachingLearningProcess1Component,
    TeachingLearningProcess2Component,
    TeachingLearningProcess3Component,
    TeachingLearningProcess4Component,
    TeacherProfileQuality1Component,
    TeacherProfileQuality2Component,
    TeacherProfileQuality3Component,
    TeacherProfileQuality4Component,
    TeacherProfileQuality5Component,
    EvaluationProcess1Component,
    EvaluationProcess2Component,
    EvaluationProcess3Component,
    EvaluationProcess4Component,
    StudentOutcome1Component,
    StudentOutcome2Component,
    StudentOutcome3Component,
    StudentOutcome4Component,
    StaisfactionSurvey1Component,
    CurriculamPlanning6Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
