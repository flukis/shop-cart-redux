import React, { useState, useEffect } from "react";
import { dataCartInterface } from "lib/seed";
import { showPriceInCart } from "lib/helpers";
import { RemoveOneItemFromCarts, EditItemInCarts } from "actions/CartAction";
import { useDispatch } from "react-redux";

function CartItem(props: dataCartInterface) {
  const dispatch = useDispatch();
  const [item, setItem] = useState<Number>(1);
  const [price, setPrice] = useState<Number>(props.price);
  const handleRemoveItem = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const { itemUid } = props;
    return dispatch(RemoveOneItemFromCarts(itemUid));
  };
  useEffect(() => {
    let result: Number = +item * props.price;
    let newData: dataCartInterface = {
      ...props,
      itemInCart: { ...props.itemInCart, item: +item },
    };
    setPrice(result);
    dispatch(EditItemInCarts(newData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);
  return (
    <div className="cart-item-wrapper">
      <div className="cart-photo-item-wrapper">
        <img
          src={props.photoUrl}
          alt={props.itemUid}
          className="cart-photo-item"
        />
      </div>
      <div className="cart-information-item-wrapper">
        <h1>{props.title}</h1>
        <p>
          Type : {props.itemInCart.type}
          <br />
          Remaining Stock : {props.itemInCart.remainingStock - +item}
        </p>
      </div>
      <div className="cart-action-item-wrapper">
        <div className="wrapper-add">
          <button
            className="action-item"
            onClick={(e) => {
              e.preventDefault();
              let num: number = +item;
              if (+item === 1)
                return dispatch(RemoveOneItemFromCarts(props.itemUid));
              num = num - 1;
              setItem(num);
            }}
          >
            -
          </button>
          <input
            placeholder={`${props.itemInCart.item}`}
            className="action-input-item"
            type="number"
            name={props.itemUid}
            id={props.itemUid}
            value={+item}
            onChange={(e) => {
              setItem(+e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              let num: number = +item;
              num = num + 1;
              setItem(num);
            }}
            className="action-item"
          >
            +
          </button>
        </div>
        <div className="cart-action-price">
          <h2>{showPriceInCart(props.itemInCart.item, +price)}</h2>
          <button
            onClick={handleRemoveItem}
            className="button-delete-cart-item"
          >
            <svg
              className="delete-cart-item"
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.12 7.47L7 9.59L4.87 7.47L3.46 8.88L5.59 11L3.47 13.12L4.88 14.53L7 12.41L9.12 14.53L10.53 13.12L8.41 11L10.53 8.88L9.12 7.47ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5ZM1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
