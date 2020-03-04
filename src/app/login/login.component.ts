import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = ''
  password:string = ''
  badCreds:string = 'Invalid Credentials' 
  invalidLogin:boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === 'Orion' && this.password === 'pass') {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
