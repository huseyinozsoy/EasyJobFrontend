import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AppComponent } from './app.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobSingleComponent } from './job-single/job-single.component';


const routes: Routes = [
  { path: '', component: JoblistComponent },
  { path: 'addjob', component: AddJobComponent },
  { path: 'job-single/:id', component: JobSingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
