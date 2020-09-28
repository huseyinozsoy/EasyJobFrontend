import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../services/jobservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})

export class AddJobComponent implements OnInit {
  status: string = '';
  constructor(private jobService: JobserviceService) { }
  ngOnInit() {
  }
  submitForm(data) {
    /*
      var formData: any = new FormData();
      formData.append("advertisementTitle", this.form.get("advertisementTitle").value);
      formData.append("location",this.form.get("location").value);
      */
    this.jobService.addjob(data);
    console.log(data);
    this.status = "Başarıyla Eklendi";
  }

}
