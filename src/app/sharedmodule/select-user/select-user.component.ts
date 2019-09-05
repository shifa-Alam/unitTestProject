import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserObsolete as User } from "../../models/users/UserObsolete";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserFilter } from 'src/app/models/filtermodels/userfilter/userFilter';
import { PageEnum } from 'src/app/enums/page.enum';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  entities: User[] = [];

  sharedForm: FormGroup;
  errorMessage: string = "required";
  isLoading: boolean;
  placeholder: string = "user.search";

  @Input('required')
  required: boolean;
  @Output()
  notify = new EventEmitter();
  @Output()
  notify2 = new EventEmitter();
  @Input('filter')
  filter: UserFilter;

  constructor(private _translate: TranslateService, private _service: UserService, private _fb: FormBuilder) {}

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });

    this.setValidation();
    this.sharedForm.get('sharedFormControl').valueChanges.subscribe(
      value => {
        this.onValueChanges(value);
        this.notify2.emit({ value: value.trim(), valid: false });
      }
    );
  }

  onValueChanges(value: string): void {

    //call server
    let f: UserFilter;
    if (this.filter)
      f = this.filter;
    else
      f = new UserFilter();

    f.firstName = value.trim();
    f.pageSize = PageEnum.All;

    if (f.firstName) {
      this._service.getAsync(f).subscribe(event => {

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

  onSelected(option: any) {

    this.notify.emit({ value: option.id, valid: option.id ? this.sharedForm.valid : false });
  }

}
