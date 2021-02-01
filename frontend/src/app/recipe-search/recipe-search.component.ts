import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  searchTerm = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.searchTerm.length) { return; }

    this.dataService.get('/recipe', {query: this.searchTerm}).subscribe(response => {
      console.log(response);
    });
  }

}
