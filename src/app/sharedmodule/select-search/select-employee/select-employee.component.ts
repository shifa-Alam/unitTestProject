import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { HttpEventType } from '@angular/common/http';
import { Employee } from 'src/app/models/hr/employee';
import { EmployeeFilter } from 'src/app/models/filtermodels/hrfilter/employeeFilter';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageEnum } from 'src/app/enums/page.enum';
import { HrEmployeeService } from 'src/app/services/hr/pmis/hrEmployee.service';

@Component({
  selector: 'app-select-employee',
  templateUrl: './select-employee.component.html',
  styleUrls: ['./select-employee.component.scss']
})
export class SelectEmployeeComponent implements OnInit {
  entities: Employee[] = [];

  sharedForm: FormGroup;
  errorMessage: string = "required";
  isLoading: boolean;
  placeholder: string = "employee.search";

  @Input('required') required: boolean;
  @Output() notify = new EventEmitter();
  @Output() notify2 = new EventEmitter();
  constructor(
    private _translate: TranslateService,
     private _service: HrEmployeeService,
      private _fb: FormBuilder
      ) { }

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
    let filter: EmployeeFilter = new EmployeeFilter();
    filter.firstName = value.trim();
    filter.pageSize = PageEnum.All;

    // console.log(filter.firstName);

    if (filter.firstName) {
      this._service.getEmployeeAsync(filter).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          this.entities = event.body.subset;
        }
      }, error => {
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
    }
    else {
      sharedFormControl.clearValidators();
    }

    sharedFormControl.updateValueAndValidity();
  }
  onSelected(option: any) {
    this.notify.emit({ value: option.id, valid: option.id ? this.sharedForm.valid : false });
  }
}
