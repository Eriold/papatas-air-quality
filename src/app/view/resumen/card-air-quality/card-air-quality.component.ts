import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-air-quality',
  templateUrl: './card-air-quality.component.html',
  styleUrls: ['./card-air-quality.component.css']
})
export class CardAirQualityComponent {

  @Input('cardList') cardList: any[];


  constructor() { }

  getColorAirQuality(AirQuality: number) {
    return (AirQuality > 0) ? ((AirQuality === 2) ? '#F4000D' : '#FFA900') : '#009D00';
  }

  formatLastActivity(LastActivity: string) {
    const dateApi: any = new Date(LastActivity);
    const dateNow: any = new Date();
    const differenceMilliseconds = dateNow - dateApi;
    const differenceDays = differenceMilliseconds / 86400000;
    const stringDays = ('' + differenceDays).split('.');
    const hours = parseFloat('0.' + stringDays[1]) * 24;
    return ` ${stringDays[0]}d ${Math.trunc(hours)}h`;
  }

  inconStormLevel(StormLevel: string) {
    return (StormLevel === 'none') ? 'fas fa-sun' : ((StormLevel === 'electric') ? 'fas fa-poo-storm' : 'fas fa-radiation-alt');
  }

}
