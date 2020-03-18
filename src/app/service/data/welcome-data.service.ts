import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';

export class HelloWorldBean {
  constructor (public message:string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServieWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let header = new HttpHeaders({
    //   Authorization:basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`, 
    //{headers}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'orion'
  //   let password = 'pass'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;
  // }
}
