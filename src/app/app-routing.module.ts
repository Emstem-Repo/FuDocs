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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
