import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  constructor(
    private nbSearchService: NbSearchService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.nbSearchService.onSearchSubmit().subscribe(searchText => {
      this.dataService.get('/recipe', {query: searchText.term}).subscribe(response => {
        console.log(response);
      });
    });
  }

}
