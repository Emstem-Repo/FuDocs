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
    SidebarComponent
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
