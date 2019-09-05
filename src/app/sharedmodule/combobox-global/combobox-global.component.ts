import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-combobox-global',
  templateUrl: './combobox-global.component.html',
  styleUrls: ['./combobox-global.component.css']
})
export class ComboboxGlobalComponent implements OnInit,OnChanges {

  errorMessage: string = "required";
    sharedForm: FormGroup;
  
    @Input('placeHolder')
    placeHolder: string ;
    @Input('value')
    value: number;
    @Input('list')
    list: any;
    @Input('required')
    required: boolean;
    @Input('disabled')
    disabled: boolean;
    @Output()
    selectValue = new EventEmitter();

    constructor(
        private _fb: FormBuilder,
        
    ) {

    }

    ngOnInit() {
     
        this.sharedForm = this._fb.group({
            sharedFormControl: ['']
        });
        this.setValidation();
        this.setDisabled();
        this.setValue();

        if (!this.required) {
            this.selectValue.emit({ value: this.sharedForm.value.sharedFormControl, valid: true });
        }else{
            this.selectValue.emit({ value: this.sharedForm.value.sharedFormControl, valid: false });
        }
        // this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
        //     value => {
        //       this.selectValue.emit({ value: value.trim(), valid: false });
        //     }
        //   );

    }

    onChange() {
        // console.log(this.sharedForm.value.sharedFormControl);
        this.selectValue.emit({ value: this.sharedForm.value.sharedFormControl, valid: this.sharedForm.valid });
    }

    setValue(): void {

        if (this.value > 0) {
            this.sharedForm.get('sharedFormControl').patchValue(this.value);
            this.selectValue.emit({ value: this.sharedForm.value.sharedFormControl, valid: this.sharedForm.valid });


        }
    }

    setValidation(): any {
        const sharedFormControl = this.sharedForm.get('sharedFormControl');

        if (this.required) {
            sharedFormControl.setValidators([Validators.required]);
        } else {
            sharedFormControl.clearValidators();
        }
        sharedFormControl.updateValueAndValidity();
    }

    setDisabled() {
        const sharedFormControl = this.sharedForm.get('sharedFormControl');

        if (this.disabled) {
            sharedFormControl.disable();
        } else {
            sharedFormControl.enable();
        }
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
                //if (changedProp.currentValue && !changedProp.firstChange) {
                if (!changedProp.firstChange) {
                    this.setDisabled();
                }
            }
        }
    }
}
