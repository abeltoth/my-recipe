import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { RecipeSearchResult, RecipeSearchResultHit } from '../shared/model/model';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  searchTerm = '';
  lastSearchTerm = '';
  recommendationKeyword = '';
  recommendationKeywords = ['chicken', 'pork', 'beef', 'vegan', 'soup', 'pasta', 'cheese', 'dessert'];
  recipeList: RecipeSearchResultHit[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setRecommendedRecipies();
  }

  search(): void {
    if (!this.searchTerm.length) { return; }

    this.lastSearchTerm = this.searchTerm;
    this.fetchRecipies(this.searchTerm);
  }

  private setRecommendedRecipies(): void {
    const randomKeywordIndex = Math.floor(Math.random() * this.recommendationKeywords.length);
    const randomRecommendationIndex = Math.floor(Math.random() * 90) + 1;
    this.recommendationKeyword = this.recommendationKeywords[randomKeywordIndex];

    this.fetchRecipies(this.recommendationKeyword, randomRecommendationIndex, randomRecommendationIndex + 10);
  }

  private fetchRecipies(query: string, from = 0, to = 10): void {
    this.dataService.get('/recipe', { query, from, to })
      .subscribe((response: RecipeSearchResult) => {
        this.recipeList = response.hits;
      });
  }

}
