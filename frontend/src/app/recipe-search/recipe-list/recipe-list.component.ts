import { RecipeSearchResultHit } from '../../shared/model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() recipeList: RecipeSearchResultHit[];
  @Input() searchTerm = '';
  @Input() recommendationKeyword = '';

  constructor() { }

  ngOnInit(): void {
  }

}
