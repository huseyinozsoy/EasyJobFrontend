import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface Advertisement{
  advertisementTitle:string
  location:string
  jobType:string
  jobDescription:string
}

@Injectable({
  providedIn: 'root'
})

export class JobserviceService {
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  getjobs() {
    return this.http.get('https://localhost:5001/api/jobs');
  }
  addjob(advertisement: any){
    this.http.post('https://localhost:5001/api/jobs', advertisement).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  getData(): Observable<any> {
    return this._data.asObservable();
  }

  setData(data: any) {
    this._data.next(data);
  }
}
