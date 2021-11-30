import { combineReducers } from "redux";
import { productReducer } from "reducers/ProductReducer";
import { cartReducer } from "reducers/CartReducer";
import { toastReducer } from "reducers/ToastReducer";

const reducers = combineReducers({
  products: productReducer,
  carts: cartReducer,
  toasts: toastReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
