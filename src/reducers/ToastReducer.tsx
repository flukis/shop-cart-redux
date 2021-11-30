export enum toastActionType {
  SHOW_TOAST = "SHOW_TOAST",
  HIDE_TOAST = "HIDE_TOAST",
}

export interface ToastIfc {
  msg: string;
  type: string;
  show: boolean;
}
interface actionShowToast {
  type: toastActionType.SHOW_TOAST;
  payload: ToastIfc;
}

interface actionHideToast {
  type: toastActionType.HIDE_TOAST;
}

export type toastAction = actionHideToast | actionShowToast;

const InitiateState: ToastIfc = { msg: "", type: "", show: false };

export const toastReducer = (
  state: ToastIfc = InitiateState,
  action: toastAction
) => {
  switch (action.type) {
    case toastActionType.HIDE_TOAST:
      return {
        ...state,
        show: false,
      };
    case toastActionType.SHOW_TOAST:
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type,
        show: true,
      };
    default:
      return { ...state };
  }
};
