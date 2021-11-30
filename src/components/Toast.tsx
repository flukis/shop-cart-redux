import React, { useEffect } from "react";
import { HideToast } from "actions/ToastAction";
import { useDispatch } from "react-redux";

export default function Toast(props: ToastInterface) {
  const dispatch = useDispatch();
  useEffect(() => {
    const toast = document.getElementById("toast");
    toast?.classList.add("show");
    document.addEventListener("click", handleClose, true);
    return () => {
      document.removeEventListener("click", handleClose, true);
    };
  }, []);
  const handleClose = () => {
    const toast = document.getElementById("toast");
    toast?.classList.remove("show");
    return dispatch(HideToast());
  };
  return (
    <>
      <div id="toast" className={`toast-wrapper toast-${props.type}`}>
        <div className={`toast-type  toast-${props.type}`}>
          {ChooseSvgBasedOnType(props.type)}
        </div>
        <div className={`toast-msg  toast-${props.type}`}>{props.msg}</div>
        <div className="toast-button-wrap">
          <button
            onClick={handleClose}
            className={`toast-close  toast-${props.type}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM14.3 14.3C13.91 14.69 13.28 14.69 12.89 14.3L10 11.41L7.11 14.3C6.72 14.69 6.09 14.69 5.7 14.3C5.31 13.91 5.31 13.28 5.7 12.89L8.59 10L5.7 7.11C5.31 6.72 5.31 6.09 5.7 5.7C6.09 5.31 6.72 5.31 7.11 5.7L10 8.59L12.89 5.7C13.28 5.31 13.91 5.31 14.3 5.7C14.69 6.09 14.69 6.72 14.3 7.11L11.41 10L14.3 12.89C14.68 13.27 14.68 13.91 14.3 14.3Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export interface ToastInterface {
  msg: string;
  type: string;
}

const ChooseSvgBasedOnType = (type: string) => {
  switch (type) {
    case "danger":
      return (
        <svg
          style={{ width: "100%", height: "100%" }}
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.47 18H17.53C19.07 18 20.03 16.33 19.26 15L11.73 1.98999C10.96 0.659993 9.04 0.659993 8.27 1.98999L0.739999 15C-0.0300008 16.33 0.929999 18 2.47 18V18ZM10 11C9.45 11 9 10.55 9 9.99999V7.99999C9 7.44999 9.45 6.99999 10 6.99999C10.55 6.99999 11 7.44999 11 7.99999V9.99999C11 10.55 10.55 11 10 11ZM11 15H9V13H11V15Z"
            fill="#fff"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          style={{ width: "100%", height: "100%" }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 11C9.45 11 9 10.55 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V10C11 10.55 10.55 11 10 11ZM11 15H9V13H11V15Z"
            fill="#fff"
          />
        </svg>
      );
    case "success":
      return (
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00014 10.1699L2.53014 6.69995C2.14014 6.30995 1.51014 6.30995 1.12014 6.69995C0.730137 7.08995 0.730137 7.71995 1.12014 8.10995L5.30014 12.2899C5.69014 12.6799 6.32014 12.6799 6.71014 12.2899L17.2901 1.70995C17.6801 1.31995 17.6801 0.689946 17.2901 0.299946C16.9001 -0.0900537 16.2701 -0.0900537 15.8801 0.299946L6.00014 10.1699Z"
            fill="#fff"
          />
        </svg>
      );

    default:
      return (
        <svg
          style={{ width: "100%", height: "100%" }}
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99999 22C10.1 22 10.99 21.11 10.99 20.01H7.00999C7.00999 21.11 7.89999 22 8.99999 22ZM16 16V10C16 6.65 13.64 3.85 10.5 3.17V2C10.5 1.17 9.82999 0.5 8.99999 0.5C8.16999 0.5 7.49999 1.17 7.49999 2V3.17C4.35999 3.85 1.99999 6.65 1.99999 10V16L0.70999 17.29C0.0799904 17.92 0.51999 19 1.40999 19H16.58C17.47 19 17.92 17.92 17.29 17.29L16 16ZM12 12.01H9.99999V14.01C9.99999 14.56 9.54999 15.01 8.99999 15.01C8.44999 15.01 7.99999 14.56 7.99999 14.01V12.01H5.99999C5.44999 12.01 4.99999 11.56 4.99999 11.01V11C4.99999 10.45 5.44999 10 5.99999 10H7.99999V8C7.99999 7.45 8.44999 7 8.99999 7C9.54999 7 9.99999 7.45 9.99999 8V10H12C12.55 10 13 10.45 13 11V11.01C13 11.56 12.55 12.01 12 12.01Z"
            fill="#fff"
          />
        </svg>
      );
  }
};
