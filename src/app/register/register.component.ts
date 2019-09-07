import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  reEnterPassword: string;
  lowerCaseValid: boolean;
  upperCaseValid: boolean;
  numberValid: boolean;
  symbolValid: boolean;
  lengthValid: boolean;
  samePasswordValid: boolean;
  message: string;
  error: boolean;
  firstNameValid: boolean;
  emailvalid: boolean;
  addressValid: boolean;
  phoneValid: boolean;
  reEnterPasswordValid: boolean;
  passwordValid: boolean;
  constructor(private _snackBar: MatSnackBar) {

  }
  user: User = new User();
  ngOnInit() {
  }
  onFirstNameChange(result: any) {
    this.user.firstName = result.value;
    this.firstNameValid = result.valid;

  }
  onLastNameChange(result: any) {
    this.user.lastName = result.value;


  }
  onEmailChange(result: any) {
    this.user.email = result.value;
    this.emailvalid = result.valid;

  }
  onphoneNumberChange(result: any) {
    this.user.phone = result.value;
    this.phoneValid = result.valid;

  }
  onAddressChange(result: any) {
    this.user.address = result.value;
    this.addressValid = result.valid;

  }
  onPasswordChange(result: any) {
    this.user.password = result.value;
    this.passwordValid = result.valid;

  }
  onRetypePasswordChange(result: any) {
    this.reEnterPassword = result.value;
    this.reEnterPasswordValid = result.valid;

  }
  updateValidation() {
    const allValid = (
      this.firstNameValid && this.phoneValid &&
      this.emailvalid && this.passwordValid &&
      this.reEnterPasswordValid
    );
    if (!allValid) {
      this._snackBar.open('Please Enter All * required Field', 'ok', {
        duration: 90000,
        panelClass: ['red_snackbar'],
        verticalPosition: 'top',

      });
    }
  }
  save() {

    if (this.firstNameValid && this.phoneValid && this.passwordValid && this.reEnterPasswordValid) {
      if (this.phoneValidation(this.user.phone)) {
        if (this.emailValidation(this.user.email)) {
          this.paswordValidation(this.user.password);
        }
      }
    } else {
      this.updateValidation();
    }
  }

  lowerCaseChecker(character): boolean {
    this.lowerCaseValid = false;
    if (character) {
      if (character.search(/[a-z]/) != -1) {
        this.lowerCaseValid = true;
      } else {
        this.lowerCaseValid = false;
      }
    }


    return this.lowerCaseValid;
  }
  upperCaseChecker(character): boolean {
    this.upperCaseValid = false;
    if (character) {
      if (character.search(/[A-Z]/) != -1) {
        this.upperCaseValid = true;
      } else {
        this.upperCaseValid = false;
      }
    }

    return this.upperCaseValid;
  }
  numberChecker(character): boolean {
    this.numberValid = false;
    if (character) {
      if (character.search(/[0-9]/) != -1) {
        this.numberValid = true;
      } else {
        this.numberValid = false;
      }
    }
    return this.numberValid;
  }
  specialSymbolChecker(character): boolean {
    this.symbolValid = false;
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (character) {
      if (format.test(character)) {
        this.symbolValid = true;
      } else {
        this.symbolValid = false;
      }
    }

    return this.symbolValid;
  }
  lengthChecker(character): boolean {
    this.lengthValid = false;
    if (character) {
      if (character.length >= 8) {
        this.lengthValid = true;
      } else {
        this.lengthValid = false;
      }
    }

    return this.lengthValid;
  }
  samePasswordChecker(firstpassword, secondPassword): boolean {
    this.samePasswordValid = false;
    if (firstpassword && secondPassword) {
      if (firstpassword === secondPassword) {
        this.samePasswordValid = true;

      } else {
        this.samePasswordValid = false;
      }
    }

    return this.samePasswordValid;
  }

  firstnameValidation(firstName) {

  }

  emailValidation(email): boolean {
    if (!this.emailvalid) {
      this._snackBar.open('Please  Enter a valid email address ex: x@gmail.com', 'ok', {
        duration: 90000,
        panelClass: ['red_snackbar'],
        verticalPosition: 'top',

      });
      return this.emailvalid;
    } else { return this.emailvalid; }

  }
  phoneValidation(phone): boolean {
    if (phone) {
      if (phone.length != 11) {
        this._snackBar.open('Phone number Should be 11 digit', 'ok', {
          duration: 90000,
          panelClass: ['red_snackbar'],
          verticalPosition: 'top',

        });
        return false;
      } else {
        return true;
      }
    }
    return false;

  }
  paswordValidation(password) {
    let invalidPass = 'Invalid Password,';
    if (!this.lowerCaseChecker(password)) {
      this.message = `${invalidPass} Minimum one Lower Case letter Needed`;
      this.error = true;
    } else if (!this.upperCaseChecker(password)) {
      this.message = ` ${invalidPass} Minimum one Upper Case letter Needed`;
      this.error = true;
    } else if (!this.numberChecker(password)) {
      this.message = `${invalidPass} Minimum one Number Needed`;
      this.error = true;
    } else if (!this.specialSymbolChecker(password)) {
      this.message = `${invalidPass} Minimum one Special Symbol Needed`;
      this.error = true;
    } else if (!this.lengthChecker(password)) {
      this.message = `${invalidPass} Minimum 8 Digit Needed`;
      this.error = true;
    } else if (!this.samePasswordChecker(password, this.reEnterPassword)) {
      this.message = `${invalidPass} Password  and confirm password must be same`;
      this.error = true;
    } else {
      this.error = false;
    }


    if (this.error) {
      this._snackBar.open(this.message, 'ok', {
        duration: 90000,
        panelClass: ['red_snackbar'],
        verticalPosition: 'top',

      });
    } else {
      this._snackBar.open('You have Successfully Registered', 'ok', {
        duration: 10000,
        panelClass: ['green_snackbar'],
        verticalPosition: 'top',

      });
    }
  }

}
