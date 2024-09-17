import { Component, Input, ViewChild, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TableColumn } from 'src/app/core/interfaces/tableColumn.interface';

type DynamicServiceName = keyof DataTableComponent;
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'dynamic-data-table',
  standalone: true,
  imports: [
    MatNativeDateModule,
    MaterialModule,
    DatePipe,
    JsonPipe,
    CommonModule,
    RouterModule,
    MatProgressBarModule
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns!: TableColumn[];
  @Input() isloading!: boolean;
  @Input() title!: string;
  @Input() route_path!: string;
  @Input() dataList!: any[];
  @Input() metaList: any;
  @Input() dynamicComponent: any;
  @Input() dynamicServiceName!: DynamicServiceName | string;

  dataSource$!: MatTableDataSource<any>;

  applyFilter(filterValue: string): void {
    if (filterValue === '') {
      // delete this.headerParams.name;
    } else {
      // this.headerParams.name = filterValue.trim().toLowerCase();
    }
    // this.dynamicComponent.filterList(this.headerParams);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataList']?.currentValue) {
      this.dataSource$ = new MatTableDataSource(this.dataList);
    }
  }
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;


  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    private _router: Router,
  ) { }

  get dynamicService(): any {
    return (this as any)[this.dynamicServiceName];
  }


  dynamicParam(key: any, rowID: number): any {
    const obj: any = {};
    obj[key] = rowID;
    return obj;
  }
  // to get all keys from array
  columnsToKeys(arr: any[]): string[] {
    return arr.map((column: any) => column.key);
  }
}
