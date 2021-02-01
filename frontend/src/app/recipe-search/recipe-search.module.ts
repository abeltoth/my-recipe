import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { RecipeSearchComponent } from './recipe-search.component';
import { RecipeSearchRoutingModule } from './recipe-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RecipeModule } from '../recipe/recipe.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RecipeSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecipeSearchRoutingModule,
    SharedModule,
    RouterModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    RecipeModule
  ]
})
export class RecipeSearchModule { }
