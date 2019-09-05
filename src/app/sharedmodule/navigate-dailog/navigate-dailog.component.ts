import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/feature-modules/hr_module/leave-approval/leave-approval.component';

@Component({
  selector: 'app-navigate-dailog',
  templateUrl: './navigate-dailog.component.html',
  styleUrls: ['./navigate-dailog.component.scss']
})
export class NavigateDailogComponent implements OnInit {

  public confirmation:boolean=false;

  constructor(public dialogRef: MatDialogRef<NavigateDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    ngOnInit(){

    }
  onNoClick(): void {
    this.dialogRef.close();
    this.confirmation=false;
  }
  onCancel(){
    this.confirmation=false;
    //console.log(this.confirmation);
    this.dialogRef.close();
  }
  onConfirm(){
    this.dialogRef.close(true);
    this.confirmation=true;
   
  }

}
