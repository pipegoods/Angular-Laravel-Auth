import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../Services/auth-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private AuthStat: AuthStateService) { }

  ngOnInit() {
   this.AuthStat.authStatus.subscribe(value => this.loggedIn = value);
  }

}
