import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeRecommendationsComponent } from './recipe-recommendations/recipe-recommendations.component';



@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipeRecommendationsComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule
  ],
  exports: [
    RecipeCardComponent,
    RecipeRecommendationsComponent
  ],
})
export class RecipeModule { }
