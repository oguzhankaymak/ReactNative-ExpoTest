import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

//State
export const INITIAL_STATE = Immutable({
  cartItem: [],
});

//Types and creators
const { Types, Creators } = createActions({
  AddToCart: ["cartItem"],
  RemoveFromCart: ["cartItem"],
});

export const CartItemTypes = Types;
export default Creators;

//Reducers
export const AddToCart = (state, action) => {
  return {
    ...state,
    cartItem: [...state.cartItem, action.cartItem],
  };
};

export const RemoveFromCart = (state, action) => {
  return {
    ...state,
    cartItem: state.cartItem.filter(
      (cartItem) => cartItem.id !== action.cartItem.id
    ),
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: AddToCart,
  [Types.REMOVE_FROM_CART]: RemoveFromCart,
});
