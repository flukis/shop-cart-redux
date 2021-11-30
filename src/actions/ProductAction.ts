import Seed, { TypeSeed, dataProductInterface, productTypes } from "lib/seed";
import { Dispatch } from "react";
import { productActionType, productAction } from "reducers/ProductReducer";

export const SetLoading = () => {
  return (dispatch: Dispatch<productAction>) => {
    dispatch({
      type: productActionType.SET_LOADING,
    });
  };
};
export const UnSetLoading = () => {
  return (dispatch: Dispatch<productAction>) => {
    dispatch({
      type: productActionType.UNSET_LOADING,
    });
  };
};

export const SetFilteredProduct = (filt: productTypes[]) => {
  return (dispatch: Dispatch<productAction>) => {
    try {
      SetLoading();
      dispatch({
        type: productActionType.SET_FILTERED_PRODUCT,
        payload: filt,
      });
      UnSetLoading();
    } catch (e) {
      dispatch({
        type: productActionType.SET_FAIL,
        payload: "Error filter data",
      });
    }
  };
};

export const LoadProduct = () => {
  return (dispatch: Dispatch<productAction>) => {
    try {
      SetLoading();

      const data: dataProductInterface[] = Seed();
      dispatch({
        type: productActionType.LOAD_PRODUCT,
        payload: data,
      });

      const filt: productTypes[] = TypeSeed();
      dispatch({
        type: productActionType.LOAD_FILTER,
        payload: filt,
      });
      dispatch({
        type: productActionType.SET_FILTERED_PRODUCT,
        payload: filt,
      });
      UnSetLoading();
    } catch (e) {
      dispatch({
        type: productActionType.SET_FAIL,
        payload: "Error load data from seeder",
      });
    }
  };
};
