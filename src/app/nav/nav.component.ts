import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JoblistComponent } from "../joblist/joblist.component";
import { JobserviceService } from '../services/jobservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  url: string;
  constructor(private http: HttpClient, private joblist: JoblistComponent,private service: JobserviceService) { }
  ngOnInit() {
  }
  submitForm(data){
    if (data.location === 'Anywhere') {
      data.location = '';
    }
      this.url = 'https://localhost:5001/api/jobs?' + 'jobtype=' + data.jobType +
      '&location=' + data.location + '&advertisementTitle=' + data.advertisementTitle;
      this.http.get(this.url).subscribe((res) => { 
      console.log(this.url);
      this.service.setData(res);
     });
    //console.log(data.location + ' ' + data.jobType + ' ' + data.advertisementTitle);
    
  }
}
