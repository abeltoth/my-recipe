import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipe-search',
    loadChildren: () => import('./recipe-search/recipe-search.module').then(mod => mod.RecipeSearchModule)
  },
  {
    path: '**',
    redirectTo: 'recipe-search',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
