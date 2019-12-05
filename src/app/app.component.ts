import { Component, OnInit, DoCheck } from '@angular/core';
import { Device } from './model/device.model';
import { DeviceService } from './services/devices.service';
import { City } from './model/city.model';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  deviceList: Device[];
  cityList: City[];

  constructor(private decieService: DeviceService, private citiesService: CitiesService) {
    this.deviceList = [];
    this.cityList = [];
  }

  ngOnInit() {
    this.decieService.list().subscribe((devices: Device[]) => {
      this.deviceList = devices;
    });
    this.citiesService.list().subscribe((cities: City[]) => {
      this.cityList = cities;
    });
  }

  ngDoCheck() {
    console.log(this.deviceList);
    console.log(this.cityList);
  }

}
