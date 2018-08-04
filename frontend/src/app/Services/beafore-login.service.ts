import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeaforeLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.Token.loggedIn();
  }
  constructor(private Token: TokenService) { }

}
