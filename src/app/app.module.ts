import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JoblistComponent } from './joblist/joblist.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SliderComponent } from './slider/slider.component';
import { GetmobileappComponent } from './getmobileapp/getmobileapp.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddJobComponent } from './add-job/add-job.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JobSingleComponent } from './job-single/job-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JoblistComponent,
    SponsorsComponent,
    SliderComponent,
    GetmobileappComponent,
    FooterComponent,
    AddJobComponent,
    JobSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [JoblistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
