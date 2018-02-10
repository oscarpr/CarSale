import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherDirective } from './searcher.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearcherDirective],
  exports: [SearcherDirective]
})
export class SearcherModule { }
