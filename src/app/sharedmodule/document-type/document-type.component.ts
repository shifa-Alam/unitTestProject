import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocumentTypeService } from 'src/app/services/common/documentType.service';
import { DocumentType } from 'src/app/models/common/documentType';


@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss']
})
export class DocumentTypeComponent implements OnInit, OnChanges {
  errorMessage: string = "required";
  sharedForm: FormGroup;

  entities: DocumentType[] = [];
  @Input('value') value: number;
  @Input('required') required: boolean;
  @Input('disabled') disabled: boolean;
  @Input('complete') complete: boolean = false;

  @Output() notify = new EventEmitter();
  constructor(private _fb: FormBuilder, private _service: DocumentTypeService) { }

  ngOnInit() {
    this.entities = this._service.getJSON();
    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });
    this.setValidation();
    this.setDisabled()
    this.setValue();
    if(!this.required){
      this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: true });
    }
  }

  onChange() {

    this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: this.disabled?true: this.sharedForm.valid });
  }

  setValue(): void {
    if (this.value > 0) {
      this.sharedForm.get('sharedFormControl').patchValue(this.value);
      this.notify.emit({ value: this.sharedForm.value.sharedFormControl, valid: this.disabled?true: this.sharedForm.valid });
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

      // if (propName === "complete") {
      //   let changedProp = changes[propName];
      //   if (changedProp.currentValue && !changedProp.firstChange) {
      //     this.sharedForm.get('sharedFormControl').patchValue("");
      //   }
      // }
    }
  }
}
