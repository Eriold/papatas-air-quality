import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device, DeviceAdapter } from '../model/device.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlDevices } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  public testDevice: any;
  constructor(
    private http: HttpClient,
    private adapter: DeviceAdapter,
  ) {
  }

  list(): Observable<Device[]> {
    return this.http.get(urlDevices).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item)))
    );
  }
}
