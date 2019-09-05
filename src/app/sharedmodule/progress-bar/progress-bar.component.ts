import { Component, OnInit, Input } from '@angular/core';
import { ProgressBarService } from 'src/app/services/common/progressBar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input('mode') mode: string;
  @Input('value') value: number;

  constructor(private _progessBarService: ProgressBarService) {

    this._progessBarService.mode$.subscribe(data => { this.mode = data; });
    this._progessBarService.value$.subscribe(data => { this.value = data; });
  }

  ngOnInit() {
  }

}