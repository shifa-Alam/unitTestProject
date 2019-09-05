import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-icon',
  templateUrl: './email-icon.component.html',
  styleUrls: ['./email-icon.component.css']
})
export class EmailIconComponent implements OnInit {
  @Input('disabled') disabled: boolean = false;
  @Output() callback = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  callbackMethod(){
    this.callback.emit();
  }
}
