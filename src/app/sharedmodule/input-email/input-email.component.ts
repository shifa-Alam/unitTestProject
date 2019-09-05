import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit, OnChanges {

  matcher = new MyErrorStateMatcher()

  invalidEmailMessage = "emailComponent.email";
  requiredEmailMessage = "emailComponent.required";
  sharedForm: FormGroup;

  @Input('required') required: boolean;
  @Input('value') value: string;
  @Input('disabled') disabled: boolean;
  @Input('hint') hint: string;
  @Output() notify = new EventEmitter();

  constructor(private _fb: FormBuilder, private _translate: TranslateService) { }

  ngOnInit() {

    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });

    this.setValidation();
    this.setDisabled();
    this.setValue();
    if (!this.required)
      this.notify.emit({ value: this.sharedForm.get('sharedFormControl').value, valid: true });
    this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
      value => {
        this.notify.emit({ value: value, valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid });
      }
    );


  }

  setValidation(): any {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');
    if (this.required) {
      sharedFormControl.setValidators([Validators.required, Validators.email]);
    }
    else {
      sharedFormControl.clearValidators();
      sharedFormControl.setValidators([Validators.email]);
    }
    sharedFormControl.updateValueAndValidity();
  }

  setValue() {
    if (this.value) {
      this.sharedForm.patchValue({
        sharedFormControl: this.value,
      });
      //this.notify.emit({ value: this.value, valid: true });
      this.notify.emit({ value: this.sharedForm.get('sharedFormControl').value, valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid });
    }
  }
  setDisabled() {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');

    if (this.disabled) {
      sharedFormControl.disable();
    }
    else {
      sharedFormControl.enable();
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    for (let propName in changes) {
      // //console.log(propName);
      if (propName === "disabled") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setDisabled();
        }
      }
      if (propName === "value") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setValue();
        }
      }
    }
  }


  onChanges(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 32) return false;
    // return UtilService.number(charCode, this.negative);
  }
}