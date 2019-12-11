import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card-air-quality',
  templateUrl: './card-air-quality.component.html',
  styleUrls: ['./card-air-quality.component.css']
})
export class CardAirQualityComponent implements OnInit {
  nameCity: Params;
  Id: string;
  Name: string;
  LastActivity: string;
  Temperature: number;
  CityId: number;
  StormLevel: string;
  AirQuality: number;
  Icon: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.Id = 'PL-999';
    this.Name = 'Nombre';
    this.LastActivity = '2019-08-18T23:00:12.000';
    this.Temperature = 23;
    this.CityId = 3;
    this.AirQuality = 2;
    // this.StormLevel = 'none';
    this.Icon = this.inconStormLevel('nuke');
  }

  getColorAirQuality(AirQuality: number) {
    return (AirQuality > 0) ? ((AirQuality === 2) ? '#F4000D' : '#FFA900') : '#009D00';
  }

  formatLastActivity(LastActivity: string) {
    const dateApi: any = new Date(LastActivity);
    const dateNow: any = new Date();
    const dayMilliseconds = 86400000;
    const differenceMilliseconds = dateNow - dateApi;
    const differenceDays = differenceMilliseconds / dayMilliseconds;
    const stringDays = ('' + differenceDays).split('.');
    const hours = parseFloat('0.' + stringDays[1]) * 24;

    // console.log('Han transcurrido ', stringDays[0], 'Dias y ', parseFloat('0.' + stringDays[1]) * 24, 'Horas' + hours);
    return ` ${stringDays[0]}d ${Math.trunc(hours)}h`;
  }

  inconStormLevel(StormLevel: string) {
    return (StormLevel === 'none') ? 'fas fa-sun' : ((StormLevel === 'electric') ? 'fas fa-poo-storm' : 'fas fa-radiation-alt');
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.nameCity = params.city;
    //   console.log(params);
    // });
  }
}
