import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { MasterAccountObsolete as MasterAccount } from "../../../models/accounts/MasterAccountObsolete";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MasterAccountService } from 'src/app/services/accounts/masterAccount.service';
import { MasterAccountFilter } from 'src/app/models/filtermodels/accountsfilter/matserAccountFilter';
import { HttpEventType } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { PageEnum } from 'src/app/enums/page.enum';

@Component({
    selector: 'app-select-master-account',
    templateUrl: './select-master-account.component.html',
    styleUrls: ['./select-master-account.component.scss']
})
export class SelectMasterAccountComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject<void>();

    entities: MasterAccount[] = [];
    sharedForm: FormGroup;
    isLoading: boolean;
    placeholder: string = "account.search";

    @Input('required')
    required: boolean;
    @Input('filter')
    filter: MasterAccountFilter;

    @Output()
    notify = new EventEmitter();
    @Output()
    notify2 = new EventEmitter();

    constructor(private _translate: TranslateService, private _service: MasterAccountService, private _fb: FormBuilder) {}

    ngOnInit() {
        this.sharedForm = this._fb.group({
            sharedFormControl: ['']
        });

        this.setValidation();
        if (!this.required) {
            this.notify2.emit({ value: this.sharedForm.value.sharedFormControl, valid: true });
        }
        this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
            value => {
                this.onValueChanges(value);
                this.notify2.emit({ value: value.trim(), valid: false });
            }
        );
    }

    onValueChanges(value: string): void {
        let f: MasterAccountFilter;
        // //call server
        if (this.filter)
            f = this.filter;
        else
            f = new MasterAccountFilter();

        f.name = value.trim();
        f.pageSize = PageEnum.All;

        if (f.name) {
            this._service.getAsync(f)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(event => {
                        if (event.type === HttpEventType.Response) {
                            this.entities = event.body.subset;
                        }
                    },
                    error => {
                        this.entities = null;
                    });
        } else {
            this.entities = null;
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

    clear(): void {
        this.sharedForm.patchValue({
            sharedFormControl: '',
        });
    }

    onSelected(option: any) {

        //this.notify.emit({ value: option.id, valid: option.id ? this.sharedForm.valid : false });
        this.notify.emit({
            value: option.id.id,
            level: option.id.level,
            propertyId: option.id.propertyId,
            valid: option.id ? this.sharedForm.valid : false
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.unsubscribe();
    }
}