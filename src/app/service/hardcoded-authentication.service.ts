import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === 'Orion' && password === 'pass') {
      return true;
    }
    return false;
  }
}
