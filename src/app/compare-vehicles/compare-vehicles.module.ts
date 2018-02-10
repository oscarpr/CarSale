import { SearcherModule } from './../directives/searcher/searcher.module';
import { HttpClientModule } from '@angular/common/http';
import { CardsModule } from './../components/cards/cards.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareVehiclesComponent } from './compare-vehicles/compare-vehicles.component';

const routes: Routes = [
  { path: '', component: CompareVehiclesComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardsModule,
    HttpClientModule,
    SearcherModule
  ],
  declarations: [CompareVehiclesComponent]
})
export class CompareVehiclesModule { }
