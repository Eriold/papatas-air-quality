import { Component, OnInit, DoCheck } from '@angular/core';
import { Device } from './model/device.model';
import { DeviceService } from './services/devices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  deviceList: Device[];

  constructor(private decieService: DeviceService) {
    this.deviceList = [];
  }

  ngOnInit() {
    this.decieService.list().subscribe((devices: Device[]) => {
      this.deviceList = devices;
    });
  }

  ngDoCheck() {
    console.log(this.deviceList);
  }

}
