import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../Services/auth-state.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
  public error = null;
  constructor(private AuthS: AuthServiceService,
              private TokenS: TokenService,
              private router: Router,
              private AuthStat: AuthStateService
            ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.AuthS.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;    
  }

  handleResponse(data){
    this.TokenS.handle(data.access_token);
    this.AuthStat.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
