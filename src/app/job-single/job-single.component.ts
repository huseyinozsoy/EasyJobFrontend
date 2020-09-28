import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-single',
  templateUrl: './job-single.component.html',
  styleUrls: ['./job-single.component.css']
})
export class JobSingleComponent implements OnInit {
  id: number;
  job:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getSingleJob(this.id);
  }
  getSingleJob(id:number){
     this.http.get('https://localhost:5001/api/jobs/'+ id.toString()).subscribe((res) => {
       this.job = res;
     })
  }

}
