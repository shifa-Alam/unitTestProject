import { Component, OnInit, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { SnackBarService } from 'src/app/services/common/snack-bar.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit, AfterContentChecked {
  private unsubscribe$ = new Subject<void>();
  //value: number;
  @Input('message') message: string;
  @Input('action') action: string;
  @Input('show') show: boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _translate: TranslateService, private _snackBarService: SnackBarService, private _snackBar: MatSnackBar, private _cdRef: ChangeDetectorRef) {

    this._snackBarService.onSuccess$.subscribe(
      message => {
        this.OepnSnackBar(message, null, 'successSnackbar');
      }
    );
    this._snackBarService.onSuccessByObj$.subscribe(
      entity => {

        if (entity.translate) {

          this._translate.get(entity.message).subscribe((res: string) => {
            this.OepnSnackBar(res, null, 'successSnackbar');
          });
        }
        else {
          this.OepnSnackBar(entity.message, null, 'successSnackbar');
        }
      }
    );


    this._snackBarService.onError$.subscribe(
      message => {
        this.OepnSnackBar(message, "global.gotIt", 'errorSnackbar');
      }
    );
    this._snackBarService.onErrorByObj$.subscribe(
      entity => {

        if (entity.translate) {

          this._translate.get("global.gotIt").subscribe((gotit: string) => {
            this._translate.get(entity.message).subscribe((res: string) => {
              this.OepnSnackBar(res, gotit, 'errorSnackbar');
            });
          });
        }
        else {
          this._translate.get("global.gotIt").subscribe((gotit: string) => {
            this.OepnSnackBar(entity.message, gotit, 'errorSnackbar');
          });
        }
      }
    );
  }

  ngOnInit() {
  }

  OepnSnackBar(message: string, action: string, className: string) {

    if (action) {
      this._snackBar.open(message, action, {
        panelClass: className,
        // horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    else {
      this._snackBar.open(message, action, {
        duration: 3000,
        panelClass: className,
        // horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
  ngAfterContentChecked(): void {
    this._cdRef.detectChanges();
  }

  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}