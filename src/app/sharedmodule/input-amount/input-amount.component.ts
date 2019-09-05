import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RegexService } from 'src/app/services/common/regex.service';
import { UtilService } from 'src/app/services/common/util.service';
import { NuCheacker } from 'src/app/services/utils/nullorUndefineChecker';

@Component({
  selector: 'app-input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss']
})
export class InputAmountComponent implements OnInit, OnChanges {

  currencyName: string;
  currencySymbol: string;

  sharedForm: FormGroup;
  @Input('placeholder') placeholder: string;
  @Input('required') required: boolean;
  @Input('value') value :number;
  @Input('disabled') disabled: boolean;
  @Input('negative') negative: boolean;
  // @Input('prefix') prefix: string;
  @Input('hint') hint: string;
  errorMessage: string = 'required';

  @Output() notify = new EventEmitter();

  constructor(private _fb: FormBuilder, private _translate: TranslateService) { }

  ngOnInit() {

    this.currencyName = localStorage.getItem('currencyName');
    this.currencySymbol = localStorage.getItem('currencySymbol');

    this.sharedForm = this._fb.group({
      sharedFormControl: [{ value: '', disabled: this.disabled ? true : false }]
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
      sharedFormControl.setValidators([Validators.required, Validators.pattern(RegexService.decimal(this.negative))]);
    } else {
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
      this.notify.emit({
        value: this.sharedForm.get('sharedFormControl').value,
        valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid
      });
    }
   else{

       this.sharedForm.patchValue({
         sharedFormControl: 0,
       });
       this.notify.emit({
         value: this.sharedForm.get('sharedFormControl').value,
         valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid
       });
     }
  }

  setDisabled() {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');

    if (this.disabled) {
      sharedFormControl.disable();
    } else {
      sharedFormControl.enable();
    }
  }

  clear(): void {
    this.sharedForm.patchValue({
      sharedFormControl: '',
    });
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
