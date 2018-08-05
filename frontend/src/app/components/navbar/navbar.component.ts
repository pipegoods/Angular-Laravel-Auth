import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../Services/auth-state.service';
import { Router } from '@angular/router';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private AuthStat: AuthStateService,
  private router: Router,
private Token: TokenService) { }

  ngOnInit() {
   this.AuthStat.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.AuthStat.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
