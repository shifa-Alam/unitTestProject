import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterContentChecked, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit, OnDestroy, AfterContentChecked {
    private unsubscribe$ = new Subject<void>();

    constructor(
        public dialogRef: MatDialogRef<ShowMoreComponent>,
        private _cdRef: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
  }
  ngAfterContentChecked(): void {
      this._cdRef.detectChanges();
  }

  ngOnDestroy(): void {

      this.unsubscribe$.next();
      this.unsubscribe$.unsubscribe();
  }
}
