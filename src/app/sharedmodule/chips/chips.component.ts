import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

export interface Fruit {
  value: string;
}
@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})

export class ChipsComponent implements OnInit {
  @Input('placeholder') placeholder: string;
  @Input('required') required: boolean;
  @Input('value') value: string;
  @Input('disabled') disabled: boolean;
  errorMessage: string;
  @Output() notify = new EventEmitter();
  fruits: Fruit[] = [];
  constructor() { }

  ngOnInit() {

  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  add(event: MatChipInputEvent): void {
    const input = event.input;
    //const value = event.value;
    this.value = event.value;

    // Add our fruit
    if ((this.value || '').trim()) {
      this.fruits.push({ value: this.value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    if (this.required) {
      this.notify.emit({ value: this.fruits, valid: this.fruits.length > 0 ? true : false });
    }

    else {
      this.notify.emit({ value: this.fruits, valid: true });
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
    if (this.required) {
      this.notify.emit({ value: this.fruits, valid: this.fruits.length > 0 ? true : false });
    }

    else {
      this.notify.emit({ value: this.fruits, valid: true });
    }
  }
  setValue(): any {
    if (this.value) {
      this.fruits.push({ value: this.value });
    }
  }
  // setDisabled() {
  //   const sharedFormControl = this.sharedForm.get('sharedFormControl');
  //   if (this.disabled) {
  //     sharedFormControl.disable();

  //   }
  //   else {
  //     sharedFormControl.enable();
  //   }
  // }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

    for (let propName in changes) {

      if (propName === "value") {
        let changedProp = changes[propName];

        //RESET
        if (changedProp.currentValue == null) {
          this.fruits = [];
        }

        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setValue();
        }
        // if (propName === "disabled") {
        //   let changedProp = changes[propName];
        //   if (changedProp.currentValue && !changedProp.firstChange) {
        //     this.setDisabled();
        //   }
        // }
      }
    }
  }
}
