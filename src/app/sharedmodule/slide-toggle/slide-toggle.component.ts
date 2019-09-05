import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {

  @Input('disabled') disabled: boolean = false;
  @Input('checked') checked: boolean = false;
  @Input('title') title: string="";

  @Output() callback = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  callbackMethod() {
    this.callback.emit();
  }

}
