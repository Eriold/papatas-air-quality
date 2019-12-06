import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableCitiesComponent } from './view/data-table-cities/data-table-cities.component';
import { ResumenComponent } from './view/resumen/resumen.component';

const appRoutes: Routes = [
  { path: '', component: DataTableCitiesComponent },
  { path: 'home', component: DataTableCitiesComponent },
  { path: 'resumen/:city', component: ResumenComponent },
  { path: '**', component: DataTableCitiesComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
