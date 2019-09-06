import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  reEnterPassword: any;
  constructor() { }
  user: User = new User();
  ngOnInit() {
  }
  onFirstNameChange(result: any) {
    this.user.firstName = result.value;

  }
  onLastNameChange(result: any) {
    this.user.lastName = result.value;

  }
  onEmailChange(result: any) {
    this.user.email = result.value;

  }
  onphoneNumberChange(result: any) {
    this.user.phone = result.value;

  }
  onAddressChange(result: any) {
    this.user.address = result.value;

  }
  onPasswordChange(result: any) {
    this.user.password = result.value;

  }
  onRetypePasswordChange(result: any) {
    this.reEnterPassword = result.value;

  }
  save() {
    if (this.user.password != this.reEnterPassword) {
      console.log("Password Is not same, please give same password");
    }
    console.log(this.user);
  }

}
