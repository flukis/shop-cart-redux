import React from "react";
import { countTotalPrice, showPriceInCart } from "lib/helpers";

import { useTypedSelector } from "hooks";

function FooterCart() {
  const { carts } = useTypedSelector((state) => state.carts);

  return (
    <div className="footer-container-cart">
      <div className="footer-wrapper-cart">
        <h3 className="total-count-price">
          Total Price <br className="br-footer-cart" />:{" "}
          <span className="total-count-price-span">{`${showPriceInCart(
            countTotalPrice(carts),
            1
          )}`}</span>
        </h3>
        <button className="checkout-cart-btn">Checkout</button>
      </div>
    </div>
  );
}

export default FooterCart;
