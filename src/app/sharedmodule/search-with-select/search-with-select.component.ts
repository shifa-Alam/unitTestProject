import { Component, OnInit, Output, EventEmitter, Input, AfterContentChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomObj } from 'src/app/models/others/customObj';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-with-select',
  templateUrl: './search-with-select.component.html',
  styleUrls: ['./search-with-select.component.css']
})
export class SearchWithSelectComponent implements OnInit,OnDestroy,AfterContentChecked {
  private unsubscribe$ = new Subject<void>();
  sharedForm: FormGroup;
  errorMessage: string = "required";
  isLoading: boolean;
    placeholderString: string = "global.search";

  @Input('placeHolder') placeHolderValue: string;
  @Input('list') list: CustomObj;
  @Input('required') required: boolean;
  @Output() selectValue = new EventEmitter();
  @Output() searchValue = new EventEmitter();
  constructor(
    private _fb: FormBuilder,
    private _cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });
    this.setValidation();
    this.setPlaceholder();
    this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
      value => {      
        this.searchValue.emit({ value: value});
      }
    );
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
  setPlaceholder() {
    if (this.placeHolderValue) {
      this.placeholderString = this.placeHolderValue;
    }
  }
  onSelected(option: any) {
    this.selectValue.emit({ value: option.id, valid: option.id ? this.sharedForm.valid : false });
  }
  clear(): void {
    this.sharedForm.patchValue({
        sharedFormControl: '',
    });
}
  ngAfterContentChecked(): void {
    this._cdRef.detectChanges();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
