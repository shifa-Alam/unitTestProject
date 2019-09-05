import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {

  hide = true;
  requiredMessage: string;
  sharedForm: FormGroup;
  placeholderString: string = "";

  @Input('placeholder') placeholder: string;
  @Input('required') required: boolean;
  @Input('hint') hint: string;
  @Output() notify = new EventEmitter();

  constructor(private _fb: FormBuilder, private _translate: TranslateService) { }

  ngOnInit() {

    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });

    this.requiredMessage = "passwordComponent.required";

    this.setPlaceholder();
    this.setValidation();

    this.sharedForm.get('sharedFormControl').statusChanges.subscribe(

      val => {
        //console.log(val);
        this.notify.emit({ value: this.sharedForm.get('sharedFormControl').value, valid: val == "VALID" ? true : false });
      }
    );
  }

  setPlaceholder(): any {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');

    if (this.placeholder) {

      this.placeholderString = this.placeholder;
    }
    else {
      this.placeholderString = "";
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
}