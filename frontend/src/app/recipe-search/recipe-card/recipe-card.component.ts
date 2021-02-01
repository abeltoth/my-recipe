import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;

  ingredientTexts: string[];
  cardFlipped: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setIngredientTexts();
  }

  toggleView(): void {
    this.cardFlipped = !this.cardFlipped;
  }

  private setIngredientTexts(): void {
    if (!this.recipe) { return; }
    this.ingredientTexts = this.recipe.ingredients.map(i => i.text);
  }

}
