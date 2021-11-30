import React from "react";
import { dataProductInterface, itemInCartInterface } from "lib/seed";
import { removeSpace } from "lib/helpers";
import { AddItemToCarts } from "actions/CartAction";
import { ShowToast } from "actions/ToastAction";
import { useDispatch } from "react-redux";

function UnProduct(props: dataProductInterface) {
  const dispatch = useDispatch();
  const handleAddToCart = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const TypeLists: Element | null = document.querySelector(
      `input[name='type-${removeSpace(props.title)}']:checked`
    );
    if (TypeLists === null) {
      const typeList = document.getElementById(`type-list-${props.uid}`);

      typeList?.childNodes.forEach((el) => {
        const e = el.childNodes.item(1) as HTMLScriptElement;
        e.classList.add("choose-danger");
        e.classList.remove("show");
        setTimeout(() => {
          e.classList.remove("choose-danger");
        }, 1000);
        setTimeout(() => {
          e.classList.add("show");
        }, 100);
      });
      dispatch(
        ShowToast({
          show: true,
          type: "warning",
          msg: "Choose at least 1 type from item",
        })
      );
      setTimeout(() => {
        const toast = document.getElementById("toast");
        toast?.classList.remove("show");
      }, 2100);
      return;
    }
    const result = props.InStock.filter((item) => {
      if (item.type === (TypeLists as HTMLInputElement).value) return item;
      return {};
    });
    (TypeLists as HTMLInputElement).checked = false;
    const ItemCart: itemInCartInterface = {
      item: 1,
      remainingStock: result[0].stock,
      type: (TypeLists as HTMLInputElement).value,
    };
    return dispatch(AddItemToCarts(props, ItemCart));
  };
  return (
    <div className="section-body">
      <div className="product-wrapper">
        <div className="product-photo-cover">
          <img
            className="product-photo"
            src={props.photoUrl}
            alt="product-shoes"
          />
        </div>
        <div className="product-details">
          <div className="product-title-price">
            <h2 className="product-title">{props.title}</h2>
            <h3 className="product-price">
              {props.price}
              <span className="product-stock">In stock</span>
            </h3>
          </div>
          {/* Action */}
          <form className="product-action">
            <div className="type-wrapper">
              <div id={`type-list-${props.uid}`} className="type-list">
                {props.InStock.map((item, index) => {
                  return (
                    <div id={`type-${removeSpace(props.title)}`} key={index}>
                      <input
                        type="radio"
                        name={`type-${removeSpace(props.title)}`}
                        id={`type-${removeSpace(props.title)}-${item.type}`}
                        value={removeSpace(item.type)}
                      />
                      <label
                        htmlFor={`type-${removeSpace(props.title)}-${
                          item.type
                        }`}
                      >
                        {item.type}
                      </label>
                    </div>
                  );
                })}
              </div>
              {props.InStock.length > 1 ? (
                <div className="size-guide">Size Guide</div>
              ) : null}
            </div>
            <div className="button-group">
              <button className="buy-now">BUY NOW</button>
              <button onClick={handleAddToCart} className="add-to-cart">
                ADD TO BAG
              </button>
              <button className="add-to-wishlist">
                <svg width="20" height="20" fill="#9333ea">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
          </form>
          <p className="shipping">
            Free shipping on all continental Zaun orders.
          </p>
        </div>
      </div>
    </div>
  );
}

const ProductItem = React.memo(UnProduct);
export default ProductItem;
