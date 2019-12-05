import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Device {
  constructor(
    public id: string,
    public name: string,
    public lasAtctivity: string,
    public temperature: number,
    public cityId: number,
    public stormLevel: string,
    public airQuality: number
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class DeviceAdapter implements Adapter<Device> {
  adapt(item: any): Device {
    return new Device(
      item.Id,
      item.Name,
      item.LastActivity,
      item.Temperature,
      item.CityId,
      item.StormLevel,
      item.AirQuality
    );
  }
}
