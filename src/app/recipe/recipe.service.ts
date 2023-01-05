import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe('Potato Pancakes',
  //     'Amazingly Crispy Sweet Potato Pancakes',
  //     'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg',
  //     [
  //       new Ingredient('Flour', 1),
  //       new Ingredient('Potatoes', 5),
  //       new Ingredient('Onion', 2),
  //       new Ingredient('Garlic', 4)
  //     ]),
  //   new Recipe('Hamburger',
  //     'A Tasty Burger Recipe',
  // tslint:disable-next-line: max-line-length
  //     'https://www.allrecipes.com/thmb/9-DRrZRmNtyPNVjL-3BKQLMOMrc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-Juiciest-Hamburgers-Ever-mfs-052-4ee37878e27b4e409b54f2a8f7313f99.jpg',
  //     [
  //       new Ingredient('Ground Beef', 1),
  //       new Ingredient('Onion', 1),
  //       new Ingredient('Cheese', 4),
  //       new Ingredient('Buns', 4),
  //       new Ingredient('Lettuce', 1)
  //     ]),
  // ];
  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addRecipeToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
