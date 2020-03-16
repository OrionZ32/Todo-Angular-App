//package com.orion.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  welcomeMessageFromService:String;
  name:string = ''

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) {

    }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

}
