import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/feature-modules/hr_module/leave-approval/leave-approval.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public confirmation: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onNoClick(): void {
        this.confirmation = false;
       
     
  }
  onConfirm() {

    this.dialogRef.close(true);
    this.confirmation = true;

    }
    cancelClick() {

        this.dialogRef.close(false);
        this.confirmation = false;
    }
}
