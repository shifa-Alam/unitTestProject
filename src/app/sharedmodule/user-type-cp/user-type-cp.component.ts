import { UserType } from '../../models/common/userType';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserTypeService } from 'src/app/services/common/userType.service';

@Component({
  selector: 'app-user-type-cp',
  templateUrl: './user-type-cp.component.html',
  styleUrls: ['./user-type-cp.component.scss']
})
export class UserTypeCpComponent implements OnInit {

    errorMessage: string = "required";
    sharedForm: FormGroup;

    entities: UserType[] = [];
    @Input('value') value: number;
    @Input('required') required: boolean;
    @Input('disabled') disabled: boolean;
    @Output() notify = new EventEmitter();
    constructor(private _fb: FormBuilder, private _service: UserTypeService) { }

    ngOnInit() {
        this.entities = this._service.getJSONCp();
        this.sharedForm = this._fb.group({
            sharedFormControl: ['']
        });
        this.setValidation();
        this.setDisabled()
        this.setValue();
        if (!this.required) {
            this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: true });
        }
    }

    onChange() {

        this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: this.sharedForm.valid });
    }

    setValue(): void {

        if (this.value > 0) {
            this.sharedForm.get('sharedFormControl').patchValue(this.value);
            this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: this.sharedForm.valid });


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
