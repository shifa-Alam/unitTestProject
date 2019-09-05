import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-submit-button2',
  templateUrl: './submit-button2.component.html',
  styleUrls: ['./submit-button2.component.scss']
})
export class SubmitButton2Component implements OnInit, OnDestroy, OnChanges {

  @Input('placeholder') placeholder: string = 'submit.submit';
  @Input('disabled') disabled: boolean = true;

    @Output() notify = new EventEmitter();
    @Output() notify2 = new EventEmitter<any>();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.setDisabled();
  }

  setDisabled() {
    if ((this.disabled === undefined) || this.disabled === null)
      this.disabled = true;
  }

  setEnabled(): void {
    this.disabled = false;
  }

  onClick(event: any): void {
    this.disabled = true;
      this.notify.emit();
      this.notify2.emit(this);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

    for (let propName in changes) {
      if (propName === "disabled") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.setDisabled();
        }
      }
    }
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
  }
}