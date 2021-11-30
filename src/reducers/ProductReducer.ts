import { dataProductInterface, productTypes } from "lib/seed";

// ProductAction Types
export enum productActionType {
  SET_LOADING = "SET_LOADING",
  LOAD_PRODUCT = "LOAD_PRODUCT",
  SET_FAIL = "SET_FAIL",
  LOAD_FILTER = "LOAD_FILTER",
  SET_FILTERED_PRODUCT = "SET_FILTERED_PRODUCT",
  UNSET_LOADING = "UNSET_LOADING",
}
interface actionSetLoading {
  type: productActionType.SET_LOADING;
}
interface actionUnsetLoading {
  type: productActionType.UNSET_LOADING;
}
interface actionLoadProduct {
  type: productActionType.LOAD_PRODUCT;
  payload: dataProductInterface[];
}
interface actionLoadFilter {
  type: productActionType.LOAD_FILTER;
  payload: productTypes[];
}
interface actionSetFailed {
  type: productActionType.SET_FAIL;
  payload: string | null;
}
interface actionSetFilteredProduct {
  type: productActionType.SET_FILTERED_PRODUCT;
  payload: productTypes[];
}
export type productAction =
  | actionUnsetLoading
  | actionLoadProduct
  | actionSetLoading
  | actionLoadFilter
  | actionSetFailed
  | actionSetFilteredProduct;

// State types
export interface productState {
  filters: productTypes[];
  products: dataProductInterface[];
  filteredProducts: dataProductInterface[];
  loading: boolean;
  error: string | null;
}

const InitiateState: productState = {
  products: [],
  filters: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

export const productReducer = (
  state: productState = InitiateState,
  action: productAction
) => {
  switch (action.type) {
    case productActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case productActionType.UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case productActionType.LOAD_FILTER:
      return {
        ...state,
        filters: action.payload,
      };
    case productActionType.SET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productActionType.LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case productActionType.SET_FILTERED_PRODUCT:
      return {
        ...state,
        filteredProducts: [
          ...state.products.filter((item: productTypes) => {
            let setTrue: boolean = false;
            action.payload.forEach((itemb) => {
              if (itemb.type === item.type) setTrue = true;
            });
            if (setTrue) return item;
            return null;
          }),
        ],
        loading: false,
      };
    default:
      return state;
  }
};
