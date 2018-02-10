import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule' },
  { path: 'compare', loadChildren: './compare-vehicles/compare-vehicles.module#CompareVehiclesModule' },
  { path: '**', redirectTo: 'vehicles' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
