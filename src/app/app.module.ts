import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CardAirQualityComponent } from './view/resumen/card-air-quality/card-air-quality.component';
import { DataTableCitiesComponent } from './view/data-table-cities/data-table-cities.component';
import { ResumenComponent } from './view/resumen/resumen.component';
import { EmergencyStatesComponent } from './view/resumen/emergency-states/emergency-states.component';


@NgModule({
  declarations: [
    AppComponent,
    CardAirQualityComponent,
    DataTableCitiesComponent,
    ResumenComponent,
    EmergencyStatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
