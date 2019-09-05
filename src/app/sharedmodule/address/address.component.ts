import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, OnChanges, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy, OnChanges {

  private unsubscribe$ = new Subject<void>();
  @Input('value') value: any;
  @Input('required') required: boolean;
  @Input('disabled') disabled: boolean;
  @Output() notify = new EventEmitter();

  allValid: boolean = false;
  streetValid: boolean = false;
  cityValid: boolean = false;
  postCodeValid: boolean = false;
  countryValid: boolean = false;
  addressTypeValid: boolean = false;

  street: string = '';
  city: string = '';
  postcode: string = '';


  countryId: number;
  addressTypeId: number;
  isDefaultValue: boolean = false;
  visible: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setAddress();
    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }

  getAddress(): any {
    return {
      street: this.street,
      city: this.city,
      postcode: this.postcode,
      countryId: this.countryId,
      addressTypeId: this.addressTypeId,
      isDefault: this.isDefaultValue
    };
  }
  onStreetChanges(result: any): void {
    this.street = result.value;
    this.streetValid = result.valid;
    this.updateValidation();
    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }
  onCityChanges(result: any): void {
    this.city = result.value;
    this.cityValid = result.valid;
 
    this.updateValidation();

    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }

  onPostcodeChanges(result: any): void {
    this.postcode = result.value;
    this.postCodeValid = result.valid;
  
    this.updateValidation();
    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }

  onCountryChange(result: any): void {

    this.countryId = result.value;
    this.countryValid = result.valid;
    this.updateValidation();
    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }
  onAddressTypeChange(result: any): void {
    this.addressTypeId = result.value;
    this.addressTypeValid = result.valid;
    this.updateValidation();
    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }
  updateValidation() {
    if (!this.required) {
      this.allValid = true;
    }else{
      this.allValid = (this.streetValid && this.cityValid && this.postCodeValid && this.countryValid && this.addressTypeValid);
    }
   
  }
  setAddress() {
      if (this.value) {
          
      this.street = this.value.street;
      this.city = this.value.city;
      this.postcode = this.value.postcode;
      this.countryId = this.value.countryId;
      this.addressTypeId = this.value.addressTypeId;
      this.isDefaultValue = this.value.isDefault;

      this.streetValid = (this.street) ? true : false;
      this.cityValid = (this.city) ? true : false;
      this.postCodeValid = (this.postcode) ? true : false;
      this.countryValid = this.countryId ? true : false;
      this.addressTypeValid = this.addressTypeId ? true : false;
      this.updateValidation();

    }
  }
  onCheckboxChange() {
    this.updateValidation();
    this.notify.emit({ value: this.getAddress(), valid: this.allValid });
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    for (let propName in changes) {
      if (propName === "value") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setAddress();
        }
      }
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}