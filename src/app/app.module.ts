import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/';

import { CardAirQualityComponent } from './view/resumen/card-air-quality/card-air-quality.component';
import { DataTableCitiesComponent } from './view/data-table-cities/data-table-cities.component';
import { ResumenComponent } from './view/resumen/resumen.component';
import { EmergencyStatesComponent } from './view/resumen/emergency-states/emergency-states.component';
import { routing, appRoutingProviders } from './app.routing';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardAirQualityComponent,
    DataTableCitiesComponent,
    ResumenComponent,
    EmergencyStatesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule]
})
export class AppModule { }
