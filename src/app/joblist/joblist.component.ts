import { Component, OnInit, Injectable } from '@angular/core';
import { JobserviceService } from '../services/jobservice.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})

export class JoblistComponent implements OnInit {
  public jobs: any;
  constructor(private jobService: JobserviceService) { }

  ngOnInit() {
    this.jobService.getData().subscribe((res) =>{
      this.jobs = res;
      //console.log(res);
    });
    
    if (this.jobs == null) {
    this.jobService.getjobs().subscribe(data => {
      this.jobs = data;
    });
    }
  }

}
