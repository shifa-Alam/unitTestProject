import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  emailvalid: boolean;
  passwordValid: boolean;
  disable: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onEmailChange(result: any) {
    this.user.email = result.value;
    this.emailvalid = result.valid;
    this.updateValidation();
  }
  updateValidation() {
    this.disable = !(this.emailvalid && this.passwordValid);
  }
  onPasswordChange(result: any) {
    this.user.password = result.value;
    this.passwordValid = result.valid;
    this.updateValidation();
  }
}
