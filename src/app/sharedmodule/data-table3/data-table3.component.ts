import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChange } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomPagedList } from 'src/app/models/others/customPagedList';
import { Access } from 'src/app/models/common/access';
import { UtilService } from 'src/app/services/common/util.service';

@Component({
  selector: 'app-data-table3',
  templateUrl: './data-table3.component.html',
  styleUrls: ['./data-table3.component.scss']
})
// This table only for dowloadable view
export class DataTable3Component implements OnInit {

  selection = new SelectionModel<any>(true, []);

  @Input('customPagedList') customPagedList: CustomPagedList;
  @Input('complete') complete: boolean = false;
  @Input('entities') entities: any;
  @Input('detailRoute') detailRoute: string;
  @Input('columns') columns: any;
  @Input('route') editRoute: any;
  @Input('access') access: Access = new Access();
  @Input('pagination') pagination: boolean = true;

  @Output() notify = new EventEmitter();
  @Output() emailObj = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() selectedItems = new EventEmitter();
  @Output() sorting = new EventEmitter();
  @Output() downloadItem = new EventEmitter();

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  index: number = 1;
  all: number;
  isLoadingResults = true;
  currentPage: any;
  currencyName: string;
  currencySymbol: string;
  disabled: boolean = false;

  //pageSize: number = PageEnum.PageSize;

  constructor(public _dialog: MatDialog, private _util: UtilService) { }

  ngOnInit() {
    this.currencyName = localStorage.getItem('currencyName');
    this.currencySymbol = localStorage.getItem('currencySymbol');
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
    const deleteDailog = this._dialog.open(DialogComponent,
      {
        position: { top: '50px' }
      });
    deleteDailog.afterClosed().subscribe(
      result => {

        if (result) {
          this.notify.emit({ obj: obj, paginator: this.paginator });
        }
      });
  }
 

  removeItem(id: number): any {
    this.entities.splice(id);
  }

  getPaginatorData(page) {

    this.index = 1 + (page.pageIndex * page.pageSize);
    this.page.emit(page);

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

    this.isAllSelected() ?
      this.selection.clear() :
      this.entities.forEach(row => this.selection.select(row));

    this.selectedItems.emit(this.selection.selected);
  }

  toggle(row: any) {
    this.selection.toggle(row);

    this.selectedItems.emit(this.selection.selected);
  }

  sortData(event: any): void {
    this.sorting.emit({ obj: event, paginator: this.paginator });
  }
  download(obj: any) {
    this.downloadItem.emit(obj);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

    for (let propName in changes) {
      if (propName === "customPagedList") {
        let changedProp = changes[propName];
        if (changedProp.currentValue === undefined) {
          //start
          this.isLoadingResults = true;
        }
        else if (changedProp.currentValue === null) {
          this.entities = null;
          this.isLoadingResults = false;
        }
        else {
          this.customPagedList = changedProp.currentValue;
          this.load();
        }

      }
      if (propName === "complete") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.disabled = false;
          this.selection.clear();
          // this.files = [];
          // this.sharedForm.get('sharedFormControl').patchValue('');
          // this.readyToPost = false;
          // this.tagArray = null;
        }
      }

    }

  }
}
