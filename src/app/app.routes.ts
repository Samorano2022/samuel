import { Routes } from '@angular/router';
import { FullprojectComponent } from './fullproject/fullproject.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpertComponent } from './expert/expert.component';
import { ProjbodyComponent } from './projbody/projbody.component';
import { ContactComponent } from './contact/contact.component';
import { AllprojectComponent } from './allproject/allproject.component';
import { ResumeComponent } from './resume/resume.component';
import { WeddingcaseComponent } from './weddingcase/weddingcase.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FullprojectComponent },
  { path: 'about', component: ProfileComponent },
  { path: 'expertise', component: ExpertComponent },
  { path: 'project', component: ProjbodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'allprojects', component: AllprojectComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'casestudy', component: WeddingcaseComponent },
];
