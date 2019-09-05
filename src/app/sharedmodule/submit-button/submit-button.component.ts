import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input('placeholder') placeholder: string = 'submit.submit';
  @Input('disabled') disabled: boolean = true;

  constructor(private _translate: TranslateService) { }
  ngOnInit() {
  }

}
