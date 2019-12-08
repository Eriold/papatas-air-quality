import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CitiesService } from '../../services/cities.service';
import { DeviceService } from '../../services/devices.service';
import { City } from '../../model/city.model';
import { Device } from '../../model/device.model';

@Component({
  selector: 'app-data-table-cities',
  templateUrl: './data-table-cities.component.html',
  styleUrls: ['./data-table-cities.component.css']
})
export class DataTableCitiesComponent implements OnInit, DoCheck {

  citiesList: City[];
  devicesList: Device[];
  cityName: any[];
  displayedColumns = ['nameCity', 'deviceTotal'];
  dataSource: any[];

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private citiesService: CitiesService
  ) {
    this.citiesList = [];
    this.devicesList = [];
    this.cityName = [];
  }

  ngOnInit() {
    this.getCities();
    this.getDevices();
  }

  ngDoCheck() {
    this.getCityName();
    this.dataSource = this.cityName;
  }

  getCityName() {
    this.cityName = this.citiesList.map((cities: City) => ({
      nameCity: cities.country,
      deviceTotal: this.optainCuantity(cities.id)
    }));
  }

  optainCuantity(cities: string) {
    let cont = 0;
    this.devicesList.map((devices: Device) => {
      if (+cities === devices.cityId) {
        cont = cont + 1;
      }
    });
    return cont;
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

  redirection(nameCity: Params) {
    this.router.navigate([`/resumen/${nameCity}`]);
  }
}
