import React, { useEffect } from "react";
import CartItem from "components/CartItem";
import FooterCart from "components/FooterCart";
import NavbarCart from "components/NavbarCart";
import { useTypedSelector } from "hooks";
import { useDispatch } from "react-redux";
import Toast from "components/Toast";
import ScrollButton from "components/ScrollButton";
import { HideToast, ShowToast } from "actions/ToastAction";

function Cart() {
  const dispatch = useDispatch();
  const { loading, carts } = useTypedSelector((state) => state.carts);
  const { show, msg, type } = useTypedSelector((state) => state.toasts);

  useEffect(() => {
    if (loading || carts.length === 0) {
      dispatch(
        ShowToast({ msg: "Your cart is empty", type: "danger", show: true })
      );
      setTimeout(() => {
        return dispatch(HideToast());
      }, 3000);
      setTimeout(() => {
        const toast = document.getElementById("toast");
        toast?.classList.remove("show");
      }, 2100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts]);
  return (
    <>
      {show && <Toast msg={msg} type={type} />}
      <NavbarCart />
      <div className="cart-items">
        {loading || carts.length === 0
          ? null
          : carts.map((item, index) => {
              return <CartItem key={index} {...item} />;
            })}
      </div>
      <ScrollButton />
      <FooterCart />
    </>
  );
}

export default Cart;
