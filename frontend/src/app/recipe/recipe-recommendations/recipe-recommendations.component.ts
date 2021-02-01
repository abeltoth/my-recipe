import { RecipeSearchResult, RecipeSearchResultHit } from './../../shared/model/model';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-recommendations',
  templateUrl: './recipe-recommendations.component.html',
  styleUrls: ['./recipe-recommendations.component.scss']
})
export class RecipeRecommendationsComponent implements OnInit {

  recommendedRecipies: RecipeSearchResultHit[] = [];
  recommendationKeywords = ['chicken', 'pork', 'beef', 'vegan', 'soup', 'pasta', 'cheese', 'dessert'];
  selectedKeyword = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setRecommendedRecipies();
  }

  private setRecommendedRecipies(): void {
      const randomKeywordIndex = Math.floor(Math.random() * this.recommendationKeywords.length);
      const randomRecommendationIndex = Math.floor(Math.random() * 90) + 1;
      this.selectedKeyword = this.recommendationKeywords[randomKeywordIndex];

      this.dataService.get('/recipe', {
        query: this.selectedKeyword,
        from: randomRecommendationIndex,
        to: randomRecommendationIndex + 10
      })
        .subscribe((response: RecipeSearchResult) => {
          this.recommendedRecipies = response.hits;
        });
  }

}
