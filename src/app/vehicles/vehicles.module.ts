import { VehicleResolver } from './vehicle-detail/vehicle-detail.resolve';
import { CardsModule } from './../components/cards/cards.module';
import { VehiclesResolver } from './vehicles-list/vehicles.resolve';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

const routes: Routes = [
	{
		path: '', component: VehiclesListComponent,
		resolve: { vehicles: VehiclesResolver },
		pathMatch: 'full'
	},
	{
		path: ':id', component: VehicleDetailComponent,
		resolve: { vehicle: VehicleResolver }
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CardsModule
	],
	declarations: [VehiclesListComponent, VehicleDetailComponent],
	providers: [
		VehiclesResolver,
		VehicleResolver
	]
})
export class VehiclesModule { }
