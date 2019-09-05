import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('disabled') disabled: boolean = false;
  // @Input('type') type: string = "submit";
  // @Output() notify = new EventEmitter();

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
      
  }

}
