import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableCitiesDataSource, DataTableCitiesItem } from './data-table-cities-datasource';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-data-table-cities',
  templateUrl: './data-table-cities.component.html',
  styleUrls: ['./data-table-cities.component.css']
})
export class DataTableCitiesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<DataTableCitiesItem>;
  dataSource: DataTableCitiesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTableCitiesDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  redirection(nameCity: Params) {
    this.router.navigate([`/resumen/${nameCity}`]);
  }
}
