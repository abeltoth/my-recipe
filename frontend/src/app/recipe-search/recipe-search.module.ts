import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSearchModule } from '@nebular/theme';
import { RecipeSearchComponent } from './recipe-search.component';
import { RecipeSearchRoutingModule } from './recipe-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RecipeSearchComponent],
  imports: [
    CommonModule,
    RecipeSearchRoutingModule,
    SharedModule,
    RouterModule,
    NbSearchModule
  ]
})
export class RecipeSearchModule { }
