import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegexService } from 'src/app/services/common/regex.service';
import { UtilService } from 'src/app/services/common/util.service';
import { UserResolver } from '../../models/others/userResolver';

@Component({
    selector: 'app-input-amount-v2',
    templateUrl: './input-amount-v2.component.html',
    styleUrls: ['./input-amount-v2.component.css']
})
export class InputAmountV2Component implements OnInit, OnChanges {

    currencySymbol: string;
    userResolver: UserResolver = new UserResolver();

    sharedForm: FormGroup;
    @Input('placeholder')
    placeholder: string = 'global.amount';
    @Input('required')
    required: boolean;
    @Input('value')
    value: number;
    @Input('disabled')
    disabled: boolean;
    @Input('negative')
    negative: boolean;
    @Input('hint')
    hint: string;
    errorMessage: string = 'required';

    @Output()
    notify = new EventEmitter();

    constructor(private _fb: FormBuilder) {}

    ngOnInit() {

        this.userResolver = JSON.parse(localStorage.getItem('userResolver'));
        this.currencySymbol = this.userResolver.loggedInCurrencySymbol;

        this.sharedForm = this._fb.group({
            sharedFormControl: [{ value: '', disabled: this.disabled }]
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

        if (Number.isNaN(this.value)) {
            this.value = 0;
        }

        this.sharedForm.patchValue({
            sharedFormControl: this.value,
        });
        this.notify.emit({
            value: this.sharedForm.get('sharedFormControl').value,
            valid: this.disabled ? true : this.sharedForm.get('sharedFormControl').valid
        });
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
                if (!changedProp.firstChange) {
                    this.setDisabled();
                }
            }

            if (propName === "value") {
                let changedProp = changes[propName];
                if (!changedProp.firstChange) {
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