import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { RecipeSearchComponent } from './recipe-search.component';
import { RecipeSearchRoutingModule } from './recipe-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';



@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipeListComponent,
    RecipeSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipeSearchRoutingModule,
    SharedModule,
    RouterModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule
  ]
})
export class RecipeSearchModule { }
