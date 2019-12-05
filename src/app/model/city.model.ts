import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class City {
  constructor(
    public id: string,
    public name: string,
    public country: string,
    public alertDevicesCount: number,
    public warningDevicesCount: number,
    public normalDevicesCount: number
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class CityAdapter implements Adapter<City> {
  adapt(item: any): City {
    return new City(
      item.Id,
      item.Name,
      item.Country,
      item.AlertDevicesCount,
      item.WarningDevicesCount,
      item.NormalDevicesCount
    );
  }
}
