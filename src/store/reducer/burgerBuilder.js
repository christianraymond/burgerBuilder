import * as actionTypes from '../actions/actionTypes';

const initiaState = {
    ingredients: null,
    totalPrice: 4.70,
    loading: false,
    error: false,
};
const INGREDIENT_PRICES = {
    salad: 3.70,
    cheese: 1.50,
    meat: 5,
    bacon: 2
};

const reducer = (state = initiaState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
              ...state,
              ingredients:{
                  ...state.ingredients,
                  [action.ingredientName]: state.ingredients[action.ingredientName] + 1
              },
              totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4.70,
                error: false
            };
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return{
                ...state,
               error: true
            }    
        default:
            return state;
    }
}

export default reducer;