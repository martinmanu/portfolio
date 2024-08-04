import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AboutComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full' } // Default route if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
