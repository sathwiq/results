import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultboardComponent } from './resultboard/resultboard.component';
import { AdmissionComponent } from './admission/admission.component';

const routes: Routes = [
 
  { path : '', component : ResultboardComponent},
  { path : 'admissions', component : AdmissionComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
