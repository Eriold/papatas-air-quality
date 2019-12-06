import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableCitiesItem {
  nameCity: string;
  totalDevices: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableCitiesItem[] = [
  { totalDevices: 1, nameCity: 'Hydrogen' },
  { totalDevices: 2, nameCity: 'Helium' },
  { totalDevices: 3, nameCity: 'Lithium' },
  { totalDevices: 4, nameCity: 'Beryllium' },
  { totalDevices: 5, nameCity: 'Boron' },
  { totalDevices: 6, nameCity: 'Carbon' },
  { totalDevices: 7, nameCity: 'Nitrogen' },
  { totalDevices: 8, nameCity: 'Oxygen' },
  { totalDevices: 9, nameCity: 'Fluorine' },
  { totalDevices: 10, nameCity: 'Neon' },
  { totalDevices: 11, nameCity: 'Sodium' },
  { totalDevices: 12, nameCity: 'Magnesium' },
  { totalDevices: 13, nameCity: 'Aluminum' },
  { totalDevices: 14, nameCity: 'Silicon' },
  { totalDevices: 15, nameCity: 'Phosphorus' },
  { totalDevices: 16, nameCity: 'Sulfur' },
  { totalDevices: 17, nameCity: 'Chlorine' },
  { totalDevices: 18, nameCity: 'Argon' },
  { totalDevices: 19, nameCity: 'Potassium' },
  { totalDevices: 20, nameCity: 'Calcium' },
];

/**
 * Data source for the DataTableCities view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableCitiesDataSource extends DataSource<DataTableCitiesItem> {
  data: DataTableCitiesItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableCitiesItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableCitiesItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableCitiesItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nameCity': return compare(a.nameCity, b.nameCity, isAsc);
        case 'id': return compare(+a.totalDevices, +b.totalDevices, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/nameCity columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
