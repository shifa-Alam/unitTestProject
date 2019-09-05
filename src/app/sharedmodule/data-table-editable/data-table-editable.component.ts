import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChange } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomPagedList } from 'src/app/models/others/customPagedList';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UtilService } from 'src/app/services/common/util.service';
import { DialogComponent } from '../dialog/dialog.component';
import { UserObsolete as User } from "../../models/users/UserObsolete";

@Component({
  selector: 'app-data-table-editable',
  templateUrl: './data-table-editable.component.html',
  styleUrls: ['./data-table-editable.component.scss']
})
export class DataTableEditableComponent implements OnInit {

  selection = new SelectionModel<any>(true, []);

  @Input('customPagedList') customPagedList: CustomPagedList;

  @Input('columns') columns: any;
  @Input('access') access: any;

  @Output() deleteItem = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() selectedItems = new EventEmitter();
  @Output() sorting = new EventEmitter();
  @Output() updateItem = new EventEmitter();

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  entities: any;
  index: number = 1;
  all: number;
  isLoadingResults = true;
  currectPage: any;
  editId: number;
  user: User;

  //pageSize: number = PageEnum.PageSize;

  constructor(public _dialog: MatDialog, private _util: UtilService) { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));
    //  console.log(this.user);
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
          this.deleteItem.emit({ obj: obj, paginator: this.paginator });
        }
      });
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

    }

  }

  getPaginatorData(page) {

    this.index = 1 + (page.pageIndex * page.pageSize);
    this.page.emit(page);

    this.isLoadingResults = true;
    this.currectPage = page;
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
  editInline(id: number) {
    this.editId = id;
  }
  update(element) {
    this.editId = null;
    this.updateItem.emit({ obj: element, paginator: this.paginator });

  }
  cancelClick() {
    this.editId = null;
  }
}
