import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CitiesService } from '../../services/cities.service';
import { DeviceService } from '../../services/devices.service';
import { City } from '../../model/city.model';
import { Device } from '../../model/device.model';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit, DoCheck {
  citiesList: City[];
  devicesList: Device[];

  numbersEmergency: number;
  numbersAlert: number;
  numbersNormal: number;

  nameCity: string;
  cityID: number;

  cardToList: any[];

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private citiesService: CitiesService
  ) {
    this.devicesList = [];
    this.citiesList = [];
    this.numbersEmergency = 0;
    this.numbersAlert = 0;
    this.numbersNormal = 0;
    this.cityID = 0;
  }

  ngOnInit() {
    this.getDevices();
    this.getCities();
    this.getNameCity();
  }

  ngDoCheck() {
    this.getIdCity();
    this.getNumbersEmergencys();
  }

  getIdCity() {
    this.citiesList.map((cities: City) => {
      if (cities.country === this.nameCity) {
        this.cityID = +cities.id;
      }
    });
  }

  getNumbersEmergencys() {
    this.devicesList.map((devices: Device) => {
      if (this.cityID === devices.cityId) {
        if (devices.airQuality === 0) {
          this.numbersEmergency = this.numbersEmergency + 1;
        } else if (devices.airQuality === 1) {
          this.numbersAlert = this.numbersAlert + 1;
        } else if (devices.airQuality === 2) {
          this.numbersNormal = this.numbersNormal + 1;
        }
      }
    });
  }

  getNameCity() {
    this.route.params.subscribe((params: Params) => {
      this.nameCity = params.city;
    });
  }

  getDevices() {
    this.deviceService.list().subscribe((devices: Device[]) => {
      this.devicesList = devices;
    });
  }
  getCities() {
    this.citiesService.list().subscribe((cities: City[]) => {
      this.citiesList = cities;
    });
  }
}
