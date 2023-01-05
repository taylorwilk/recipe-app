import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Ice Cream', 2),
    new Ingredient('Milk', 1)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient): any {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
