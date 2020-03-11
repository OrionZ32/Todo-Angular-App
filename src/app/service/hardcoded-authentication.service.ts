import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('before ' + this.isUserLoggedIn());
    if(username === 'Orion' && password === 'pass') {
      sessionStorage.setItem('authenticateUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user == null)
  }
}
