import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.scss']
})
export class InputStringComponent implements OnInit, OnChanges {

  sharedForm: FormGroup;
  @Input('placeholder')
  placeholder: string;
  @Input('required')
  required: boolean;
  @Input('value')
  value: string;
  @Input('disabled')
  disabled: boolean;
  @Input('hint')
  hint: string;

  errorMessage: string;
  @Output()
  notify = new EventEmitter();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });
    this.setValidation();
    this.setDisabled();
    this.setValue();

    if (!this.required) {
      this.notify.emit({ value: this.sharedForm.get('sharedFormControl').value, valid: true });
    }


    this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
      value => {
        // console.log("Init")
        this.notify.emit({ value: value, valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid });
      }
    );
  }

  setValidation(): any {
    if (this.required) {
      const sharedFormControl = this.sharedForm.get('sharedFormControl');
      sharedFormControl.setValidators([Validators.required]);
      this.errorMessage = 'This field is required';
      sharedFormControl.updateValueAndValidity();
    }

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
      if (propName === "value") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setValue();
        }
      }
      if (propName === "disabled") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setDisabled();
        }
      }
    }
  }

}
