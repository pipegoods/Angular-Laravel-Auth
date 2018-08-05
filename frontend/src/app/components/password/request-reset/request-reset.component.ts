import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../Services/auth-service.service';
import { SnotifyService } from '../../../../../node_modules/ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  private form = {
    email:null
  }
  constructor(private Auth : AuthServiceService,
  private notify: SnotifyService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Wait...' ,{timeout:5000})
    this.Auth.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.notify.success(res.data,{timeout:0});
    
    this.form.email = null;
  }
}
