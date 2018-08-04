import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private loggedIn = new BehaviorSubject <Boolean> (this.Token.loggedIn());
  
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value)
  }


  constructor(private Token: TokenService) { }
}
