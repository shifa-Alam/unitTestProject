import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChange, OnChanges, ɵConsole } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomPagedList } from '../../models/others/customPagedList';
import { Access } from '../../models/common/access';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UtilService } from '../../services/common/util.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ShowMoreComponent } from '../show-more/show-more.component';



@Component({
  selector: 'app-data-table4',
  templateUrl: './data-table4.component.html',
  styleUrls: ['./data-table4.component.css']
})
export class DataTable4Component implements OnInit, OnChanges {
  selection = new SelectionModel<any>(true, []);
  entities: any;

  @Input('customPagedList')
  customPagedList: CustomPagedList;
  @Input('complete')
  complete: boolean = false;
  @Input('detailRoute')
  detailRoute: string;
  @Input('columns')
  columns: any;
  @Input('editRoute')
  editRoute: any;
  @Input('access')
  access: Access = new Access();
  @Input('pagination')
  pagination: boolean = true;
  @Input('showMoreOption')
  showMoreOption: boolean = true;

  //events
  @Output()
  onDelete = new EventEmitter();
  @Output()
  emailObj = new EventEmitter();
  @Output()
  onPageChange = new EventEmitter();
  @Output()
  onItemsSelect = new EventEmitter();
  @Output()
  onSort = new EventEmitter();
  @Output()
  onDownload = new EventEmitter();
  @Output()
  onItemsDelete = new EventEmitter();
  @Output()
  onAliveChange = new EventEmitter();
  @Output()
  onOnChange = new EventEmitter();

  displayedColumns: string[] = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  index: number = 1;
  all: number;
  isLoadingResults = true;
  currentPage: any;
  currencyName: string;
  currencySymbol: string;
  emailClickDisabled: boolean = false;
  aliveClickDisabled: boolean = false;
  onClickDisabled: boolean = false;


  //pageSize: number = PageEnum.PageSize;

  constructor(public _dialog: MatDialog, private _util: UtilService) { }

  ngOnInit() {
    this.currencyName = localStorage.getItem('currencyName');
    this.currencySymbol = localStorage.getItem('currencySymbol');

  }
  isString(val) {
    return typeof val === 'string';
  }
  showMore(data: any) {

    const dialogRef = this._dialog.open(ShowMoreComponent, {
      width: '600px',
      position: { top: '50px' },
      data: { details: data }
    });

    dialogRef.afterClosed();
  }
  load() {

    this.isLoadingResults = true;

    if (this._util.NullOrUndefineCheacker(this.customPagedList)) {

      this.isLoadingResults = false;
      this.all = this.customPagedList.totalItemCount;
      this.entities = this.customPagedList.subset;
      //paginator
      this.paginator.pageIndex = this.customPagedList.pageNumber - 1;
      this.paginator.pageSize = this.customPagedList.pageSize;
      this.paginator.length = this.customPagedList.totalItemCount;
      this.index = 1 + (this.paginator.pageIndex * this.paginator.pageSize);

      //sort
      //this.sort.

      this.entities.paginator = this.paginator;
      this.entities.sort = this.sort;

      this.displayedColumns = this.columns.map(column => column.name);

    }
  }

  delete(obj: any) {
    const dailog = this._dialog.open(DialogComponent,
      {
        position: { top: '50px' }
      });
    dailog.afterClosed().subscribe(
      result => {

        if (result) {
          this.onDelete.emit({ obj: obj, paginator: this.paginator });
        }
      });
  }

  sendEmail(obj: any) {
    this.emailObj.emit(obj);
    this.emailClickDisabled = true;
  }


  //removeItem(id: number): any {
  //  this.entities.splice(id);
  //}

  getPaginatorData(page) {

    this.index = 1 + (page.pageIndex * page.pageSize);
    this.onPageChange.emit(page);

    this.isLoadingResults = true;
    this.currentPage = page;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.entities.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {

    this.isAllSelected() ? this.selection.clear() : this.entities.forEach(row => this.selection.select(row));

    this.onItemsSelect.emit(this.selection.selected);


  }

  deleteSelectedItem() {
    console.log(this.selection.selected);
    this.onItemsDelete.emit(this.selection.selected);
  }

  toggle(row: any) {
    this.selection.toggle(row);

    this.onItemsSelect.emit(this.selection.selected);
  }

  sortData(event: any): void {
    this.onSort.emit({ obj: event, paginator: this.paginator });
  }

  download(obj: any) {
    this.onDownload.emit(obj);
  }

  deActiveItem(obj: any) {
    console.log(obj);
  }

  changeAlive(element: any, event: any) {

    const dailog = this._dialog.open(DialogComponent,
      {
        position: { top: '50px' }
      });
    dailog.afterClosed().subscribe(
      confirmResult => {
        if (confirmResult) {
          this.onAliveChange.emit({ objValue: element, checked: event.checked, paginator: this.paginator });
        } else {

          element.alive = !event.checked;
        }

      }, err => {
        //console.log(err);
      });



  }

  changeOn(element: any, event: any) {

    this.onClickDisabled = true;


    const dailog = this._dialog.open(DialogComponent,
      {
        position: { top: '50px' }
      });
    dailog.afterClosed().subscribe(
      confirmResult => {
        if (confirmResult) {
          this.onOnChange.emit({ objValue: element, checked: event.checked, paginator: this.paginator });
        } else {

          element.on = !event.checked;
        }

      }, err => {
        //console.log(err);
      });

  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

    for (let propName in changes) {
      if (propName === "customPagedList") {
        let changedProp = changes[propName];
        if (changedProp.currentValue === undefined) {
          //start
          this.isLoadingResults = true;
        } else if (changedProp.currentValue === null) {
          this.entities = null;
          this.isLoadingResults = false;
        } else {
          this.customPagedList = changedProp.currentValue;
          this.load();
        }

      }
      if (propName === "complete") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          //this.emailClickDisabled = false;
          this.aliveClickDisabled = false;
          this.onClickDisabled = false;
          this.selection.clear();

        }
      }
    }
  }
}
