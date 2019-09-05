import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChange } from '@angular/core';
import { BranchObsolete as Branch } from "../../models/users/BranchObsolete";
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BranchAddress } from 'src/app/models/users/branchAddress';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit, OnDestroy, OnChanges {

  private unsubscribe$ = new Subject<void>();
  @Input('value') value: Branch;
  @Input('required') required: boolean;
  @Input('disabled') disabled: boolean;
  @Output() notify = new EventEmitter();
  phone: any;
  address: any;

  initValue: BranchAddress;

  allValid: boolean = false;
  addressValid: boolean = false;
  nameValid: boolean = false;
  phoneValid: boolean = false;

  cultureCodeValid: boolean = false;

  name: string = '';
  cultureCodeId: number;
  placeholderBranchName: string = 'branch.name';
  isCorporateValue: boolean = false;


  constructor() { }

  ngOnInit() {
    this.getBranch();
    this.setBranch();
    if(this.disabled){
      this.notify.emit({ value: this.getBranch(), valid: true });
    }
  }

  getBranch(): Branch {
    let branch = new Branch();
    branch.name = this.name;
    branch.cultureCodeId = this.cultureCodeId;
    branch.isCorporate = this.isCorporateValue;
    branch.branchAddresses.push(this.address);
    branch.branchPhones.push(this.phone);
    return branch;
  }

  onBranchNameChanges(result: any): void {
    this.name = result.value;
    this.nameValid = result.valid;
    this.updateValidation();
    this.notify.emit({ value: this.getBranch(), valid: this.allValid });
  }
  onCultureCodeChange(result: any): void {
    this.cultureCodeId = result.value;
    this.cultureCodeValid = result.valid;

    this.updateValidation();
    this.notify.emit({ value: this.getBranch(), valid: this.allValid });
  }

  onPhoneChange(result: any): void {
    this.phone = result.value;
    this.phoneValid = result.valid;
    // //console.log(result);
    this.updateValidation();
    this.notify.emit({ value: this.getBranch(), valid: this.allValid });
  }

  onAddressChange(result: any): void {
    this.address = result.value;
    this.addressValid = result.valid;
    // //console.log(result);
    this.updateValidation();
    this.notify.emit({ value: this.getBranch(), valid: this.allValid });
  }
  updateValidation() {
    if (!this.required || this.disabled) {
      this.allValid = true;
    } else {
      this.allValid = this.nameValid && this.phoneValid && this.addressValid && this.cultureCodeValid;
    }

  }

  setBranch() {
      if (this.value) {

          this.name = this.value.name;
          this.isCorporateValue = this.value.isCorporate;
          this.cultureCodeId = this.value.cultureCodeId;

          this.value.branchPhones.forEach(element => {
              if (element.isDefault)
                  this.phone = element;
          });

          this.value.branchAddresses.forEach(element => {
              if (element.isDefault)
                  this.address = element;
          });


          //this.address = this.value.branchAddresses[0];
          //this.phone = this.value.branchPhones[0];
      }
  }

  onCheckboxChage() {
    this.updateValidation();
    this.notify.emit({ value: this.getBranch(), valid: this.allValid });
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    for (let propName in changes) {
      if (propName === "value") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setBranch();
        }
      }
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
