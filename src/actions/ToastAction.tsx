import { Dispatch } from "react";
import { toastAction, toastActionType, ToastIfc } from "reducers/ToastReducer";

export const HideToast = () => {
  return (dispatch: Dispatch<toastAction>) => {
    dispatch({
      type: toastActionType.HIDE_TOAST,
    });
  };
};
export const ShowToast = (props: ToastIfc) => {
  return (dispatch: Dispatch<toastAction>) => {
    HideToast();
    dispatch({
      type: toastActionType.SHOW_TOAST,
      payload: props,
    });
  };
};
