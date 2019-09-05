import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  sharedForm: FormGroup;
  placeholderString: string = ""; 
  requiredMessage: string = "search.required";

  @Input('placeholder') placeholder: string;
  @Input('required') required: boolean;
  @Input('list') list: any[] = [];

  @Output() notify = new EventEmitter<string>();
  @Output() selectedId = new EventEmitter<number>();

  constructor(private _translate: TranslateService, private _fb: FormBuilder) { }

  ngOnInit() {

    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });

    this.setPlaceholder();
    this.setValidation();
   
    this.sharedForm.get('sharedFormControl').valueChanges.subscribe(

      value => {

        this.notify.emit(value);
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

  onSelected(option:any):void{

    this.selectedId.emit(option.id);
  }
}
