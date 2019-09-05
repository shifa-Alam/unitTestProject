import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef, SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NuCheacker } from 'src/app/services/utils/nullorUndefineChecker';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit, OnDestroy, OnChanges {

    private unsubscribe$ = new Subject<void>();
  @Input('value') value: any;
  @Input('disabled') disabled: boolean;
  @Input('required') required: boolean;
  @Output() notify = new EventEmitter();

  phoneNumber: string = "";
  phoneTypeId: number;

  allValid: boolean = false;
  phoneNumberValid: boolean = false;

  isDefaultValue: boolean = false;
  phoneTypeValid: boolean = false;

  constructor() { }

    ngOnInit() {
        this.setPhone();
    this.notify.emit({ value: this.getPhone(), valid: this.allValid });
  }
  getPhone(): any {
      return {
          phoneNumber: this.phoneNumber,
          phoneTypeId: this.phoneTypeId,
          isDefault: this.isDefaultValue
      };
  }
  onPhoneChange(result: any) {
    this.phoneNumber = result.value;
    this.phoneNumberValid = result.valid;

    this.updateValidation();
    this.notify.emit({ value: this.getPhone(), valid: this.allValid });
  }
  onPhoneTypeChange(result: any) {
    this.phoneTypeId = result.value;
    this.phoneTypeValid = result.valid;
    this.updateValidation();
    this.notify.emit({ value: this.getPhone(), valid: this.allValid });
  }
 
  setPhone() {
      if (NuCheacker.checkNU(this.value)) {
          this.phoneNumber = this.value.phoneNumber;
          this.phoneTypeId = this.value.phoneTypeId;
          this.isDefaultValue = this.value.isDefault;
          this.phoneNumberValid = (this.phoneNumber) ? true : false;
          this.phoneTypeValid = (this.phoneTypeId) ? true : false;
      } 
         
    this.updateValidation();
  }
  updateValidation() {
    if (!this.required) {
      this.allValid = true;
    } else {
      this.allValid = this.phoneNumberValid && this.phoneTypeValid;

    }
  }
  onCheckboxChange() {
    this.updateValidation();
    this.notify.emit({ value: this.getPhone(), valid: this.allValid });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    for (let propName in changes) {
      if (propName === "value") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setPhone();
        }
      }
    }
    }
  ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.unsubscribe();
  }
}
