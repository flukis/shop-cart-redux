import { dataCartInterface } from "lib/seed";
export enum cartActionType {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_A_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  REMOVE_ALL_PRODUCT_FROM_CART = "REMOVE_ALL_FROM_CART",
  EDIT_A_PRODUCT_FROM_CART = "EDIT_A_PRODUCT_FROM_CART",
  CHECKOUT_FROM_CART = "CHECKOUT_FROM_CART",
  SET_LOADING = "SET_LOADING",
  UNSET_LOADING = "UNSET_LOADING",
  SET_FAIL = "SET_FAIL",
}

interface actionCartAdd {
  type: cartActionType.ADD_PRODUCT_TO_CART;
  payload: dataCartInterface;
}

interface actionCartRemove {
  type: cartActionType.REMOVE_A_PRODUCT_FROM_CART;
  payload: string; // UID
}

interface actionCartRemoveAll {
  type: cartActionType.REMOVE_ALL_PRODUCT_FROM_CART;
}

interface actionCartEdit {
  type: cartActionType.EDIT_A_PRODUCT_FROM_CART;
  payload: dataCartInterface;
}

interface actionCartCheckout {
  type: cartActionType.CHECKOUT_FROM_CART;
}

interface actionCartSetLoading {
  type: cartActionType.SET_LOADING;
}
interface actionCartUnsetLoading {
  type: cartActionType.UNSET_LOADING;
}
interface actionCartSetFailed {
  type: cartActionType.SET_FAIL;
  payload: string | null;
}

export type cartAction =
  | actionCartAdd
  | actionCartCheckout
  | actionCartEdit
  | actionCartRemove
  | actionCartRemoveAll
  | actionCartSetLoading
  | actionCartUnsetLoading
  | actionCartSetFailed;

export interface cartState {
  carts: dataCartInterface[];
  loading: boolean;
  error: string | null;
}

const initiateState: cartState = {
  carts: [],
  loading: false,
  error: null,
};

export const cartReducer = (
  state: cartState = initiateState,
  action: cartAction
) => {
  switch (action.type) {
    case cartActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case cartActionType.UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };

    case cartActionType.SET_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case cartActionType.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case cartActionType.REMOVE_ALL_PRODUCT_FROM_CART:
      return {
        ...state,
        carts: [],
      };

    case cartActionType.REMOVE_A_PRODUCT_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(
          (item: dataCartInterface) => item.itemUid !== action.payload
        ),
      };

    case cartActionType.CHECKOUT_FROM_CART:
      return {
        ...state,
        carts: [], // Move to history or checkout
      };

    case cartActionType.EDIT_A_PRODUCT_FROM_CART:
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.itemUid === action.payload.itemUid) return action.payload;
          else return item;
        }),
      };

    default:
      return state;
  }
};
