import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipe/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-app-b9f90-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(
        'https://recipe-app-b9f90-default-rtdb.firebaseio.com/recipes.json',
      )
      .pipe(
        map(recipes => {
          // tslint:disable-next-line: no-shadowed-variable
          return recipes.map(recipes => {
            return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []};
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        }));
  }
}
