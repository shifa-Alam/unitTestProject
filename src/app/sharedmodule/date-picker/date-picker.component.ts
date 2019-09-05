import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDatepickerInputEvent } from '@angular/material';

import * as _moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, OnChanges {
  hintColor ='red';
  sharedForm: FormGroup;
  errorMessage: string = 'required';

  @Input('placeholder') placeholder: string = 'submit.choose';
  @Input('required') required: boolean;
  @Input('value') value: string;
  @Input('disabled') disabled: boolean;
  @Input('message') message:string;
  @Input('hint') hint:string;
  @Output() notify = new EventEmitter<any>();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: [{ value: '', disabled: false }]
    });
    this.setValidation();
    this.setValue();
    if(!this.required){
      this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: true });
    }
  }

  setValidation(): any {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');

    if (this.required) {
      sharedFormControl.setValidators([Validators.required]);
    }
    else {
      sharedFormControl.clearValidators();
    }

    sharedFormControl.updateValueAndValidity();
  }

  

  setValue() {
    if (this.value) {
      this.sharedForm.patchValue({
        sharedFormControl: this.value,
      });

      this.notify.emit({ value: this.sharedForm.get('sharedFormControl').value, valid: true });
    }
    else {
      this.notify.emit({ value: null, valid: false });
    }
  }

  clear(): void {
    this.sharedForm.patchValue({
      sharedFormControl: '',
    });
  }

  changeEvent(event: MatDatepickerInputEvent<_moment.Moment>) {
    this.notify.emit({ value: event.value.utc(true), valid: true });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

    for (let propName in changes) {

      if (propName === "value") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setValue();
        }
      }
     
    }
  }
}
