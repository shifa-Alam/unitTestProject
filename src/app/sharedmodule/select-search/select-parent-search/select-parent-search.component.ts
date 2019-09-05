import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MasterAccountObsolete as MasterAccount } from "../../../models/accounts/MasterAccountObsolete";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpEventType } from '@angular/common/http';
import { MasterAccountService } from 'src/app/services/accounts/masterAccount.service';
import { MasterAccountFilter } from 'src/app/models/filtermodels/accountsfilter/matserAccountFilter';
import { Subject } from 'rxjs';
import { PageEnum } from 'src/app/enums/page.enum';

@Component({
  selector: 'app-select-parent-search',
  templateUrl: './select-parent-search.component.html',
  styleUrls: ['./select-parent-search.component.scss']
})
export class SelectParentSearchComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  entities: MasterAccount[] = [];

  sharedForm: FormGroup;

  isLoading: boolean;
  placeholder: string = "account.search";

  @Input('required') required: boolean;
  @Output() notify = new EventEmitter();
  @Output() notify2 = new EventEmitter();

  constructor(private _translate: TranslateService, private _service: MasterAccountService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });

    this.setValidation();
    if(!this.required){
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
    //call server
    let filter: MasterAccountFilter = new MasterAccountFilter();
    filter.name = value.trim();
    filter.pageSize = PageEnum.All;

    if (filter.name) {
      this._service.getAsync(filter).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          this.entities = event.body.subset;
        }
      }, error => {
        this.entities = null;
      });
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

  onSelected(option: any) {

    this.notify.emit({ value: option.id, valid: option.id ? this.sharedForm.valid : false });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
