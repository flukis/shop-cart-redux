import {
  dataProductInterface,
  dataCartInterface,
  itemInCartInterface,
} from "lib/seed";
import { v1 as uuidv1 } from "uuid";
import { Dispatch } from "react";
import { cartActionType, cartAction } from "reducers/CartReducer";

export const SetLoading = () => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: cartActionType.SET_LOADING,
    });
  };
};
export const UnSetLoading = () => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: cartActionType.UNSET_LOADING,
    });
  };
};

export const RemoveOneItemFromCarts = (uuid: string) => {
  return (dispatch: Dispatch<cartAction>) => {
    try {
      SetLoading();
      dispatch({
        type: cartActionType.REMOVE_A_PRODUCT_FROM_CART,
        payload: uuid,
      });
      UnSetLoading();
    } catch (e) {
      dispatch({
        type: cartActionType.SET_FAIL,
        payload: "Error remove an item",
      });
    }
  };
};

export const RemoveAllItemFromCarts = () => {
  return (dispatch: Dispatch<cartAction>) => {
    try {
      SetLoading();
      dispatch({
        type: cartActionType.REMOVE_ALL_PRODUCT_FROM_CART,
      });
      UnSetLoading();
    } catch (e) {
      dispatch({
        type: cartActionType.SET_FAIL,
        payload: "Error remove all item",
      });
    }
  };
};

export const AddItemToCarts = (
  product: dataProductInterface,
  item: itemInCartInterface
) => {
  return (dispatch: Dispatch<cartAction>) => {
    try {
      SetLoading();
      const res: dataCartInterface = {
        ...product,
        itemInCart: item,
        itemUid: uuidv1(),
      };
      dispatch({
        type: cartActionType.ADD_PRODUCT_TO_CART,
        payload: res,
      });
      UnSetLoading();
    } catch (e) {
      dispatch({
        type: cartActionType.SET_FAIL,
        payload: "Error add item to carts",
      });
    }
  };
};

export const EditItemInCarts = (product: dataCartInterface) => {
  return (dispatch: Dispatch<cartAction>) => {
    try {
      SetLoading();
      dispatch({
        type: cartActionType.EDIT_A_PRODUCT_FROM_CART,
        payload: product,
      });
      UnSetLoading();
    } catch (e) {
      dispatch({
        type: cartActionType.SET_FAIL,
        payload: "Error add item to carts",
      });
    }
  };
};
