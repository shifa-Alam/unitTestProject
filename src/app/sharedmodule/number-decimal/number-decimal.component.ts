import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/services/common/util.service';
import { RegexService } from 'src/app/services/common/regex.service';

@Component({
  selector: 'app-number-decimal',
  templateUrl: './number-decimal.component.html',
  styleUrls: ['./number-decimal.component.scss']
})
export class NumberDecimalComponent implements OnInit, OnChanges {

  sharedForm: FormGroup;
  @Input('placeholder') placeholder: string;
  @Input('required') required: boolean;
  @Input('value') value;
  @Input('disabled') disabled: boolean;
  @Input('negative') negative: boolean;
  @Input('hint') hint: string;
  errorMessage: string = 'required';

  @Output() notify = new EventEmitter();

  constructor(private _fb: FormBuilder, private _translate: TranslateService) { }

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: [{ value: '', disabled: this.disabled ? true : false }]
    });
    this.setValidation();
    this.setDisabled();
    this.setValue();
    if(!this.required){
      this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: true });
    }

    this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
      value => {
        this.notify.emit({ value: value, valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid });
      }
    );
  }

  setValidation(): any {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');

    if (this.required) {
      sharedFormControl.setValidators([Validators.required, Validators.pattern(RegexService.decimal(this.negative))]);
    }
    else {
      sharedFormControl.clearValidators();

      sharedFormControl.setValidators([Validators.pattern(RegexService.decimal(this.negative))]);
    }

    sharedFormControl.updateValueAndValidity();
  }

  setValue() {
    if (this.value) {
      this.sharedForm.patchValue({
        sharedFormControl: this.value,
      });

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
    return UtilService.decimal(charCode, this.negative);
  }
}