//package com.orion.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  name:string = ''

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

}
