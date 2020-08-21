import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Contact } from '../contact-us/contact-us.component';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
  

    saveContactDetails(contactDetails:Contact){
      return this.http.post(UserService.BaseUrl+"contactUs",contactDetails,httpOptions);


    }

    postfitnessdata(data) {
      return this.http
        .post(UserService.BaseUrl + "allfriends", data, httpOptions)
        .pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      return this.http
        .get(UserService.BaseUrl + "allfriends", httpOptions)
        .pipe(map((response: Response) => response.json()));
    }
    postContactUsData(data) {
      return this.http
        .post(UserService.BaseUrl + "contactUs", data, httpOptions)
        .pipe(map((response: Response) => response.json()));
    }
    deleteAppointment(id) {
      return this.http
        .delete(UserService.BaseUrl + "allfriends/" + id, httpOptions)
        .pipe(map((response: Response) => response.json()));
    }

    
}