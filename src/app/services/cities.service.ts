import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, CityAdapter } from '../model/city.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlCities } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private http: HttpClient,
    private adapter: CityAdapter
  ) { }

  list(): Observable<City[]> {
    return this.http.get(urlCities).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item)))
    );
  }
}
