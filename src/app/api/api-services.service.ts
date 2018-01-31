import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
let apiURl = "http://localhost:3000/user/";
@Injectable()
export class ApiServicesService {
  public apiToken = "";
  public isLogin: boolean;

  constructor(private http: Http) { }

  doLoginApiCall(methodURL, credentials) {

    return new Promise((resolve, reject) => {
      let body = JSON.stringify(credentials);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(apiURl + methodURL, body, options)
        .subscribe(res => {

          resolve(res.json());
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  getAction(url) {
    console.log(this.apiToken);
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      options.headers.set('Authorization', "bearer" + " " + this.apiToken);
      this.http.get(apiURl + url, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  doPostAction(url, formData) {
    return new Promise((resolve, reject) => {
      let body = JSON.stringify(formData);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      options.headers.set('Authorization', "bearer" + " " + this.apiToken);
      this.http.post(apiURl + url, body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
