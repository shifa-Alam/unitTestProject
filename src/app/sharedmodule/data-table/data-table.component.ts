import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEnum } from 'src/app/enums/page.enum';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  detailsValue: boolean = false;
  @Input('entities') entities: any;
  @Input('columns') columns: any;
  @Input('route') route: any;
  @Input('access') access: any;
  @Input('details') details: boolean;
  @Input('detailRoute') detailRoute: string;
  @Output() notify = new EventEmitter();

  data: any;
  pageSize: number = PageEnum.PageSize;
  pageIndex: number = 1;

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  userId: number;

  constructor(public _dialog: MatDialog) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userId = user.id;
    this.load();//1

    
  }


  load(): void {

    //console.log('loading from datatable');

    //this.paginator.pageIndex=0;
    ////console.log(this.paginator.pageIndex);

    this.displayedColumns = this.columns.map(column => column.name);
    this.entities = new MatTableDataSource<any>(this.entities);

    //this.paginator.pageIndex = this.pageIndex;
if( this.details!=false)
    this.detailsValue= this.details;
    this.entities.paginator = this.paginator;
  }


  delete(obj: any) {
    const deleteDailog = this._dialog.open(DialogComponent,
      {
        position: { top: '50px' }
      });
    deleteDailog.afterClosed().subscribe(
      result => {
        if (result) {
          this.notify.emit(obj);
        }
      });
  }
  getPaginatorData(event) {
    //console.log(event);

    //this.load();
    this.pageIndex = this.pageIndex + this.pageSize;
    ////console.log(this.pageIndex);
  }
}