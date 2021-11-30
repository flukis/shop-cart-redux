import { Link } from "react-router-dom";
import { RemoveAllItemFromCarts } from "actions/CartAction";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "hooks";
function NavbarCart() {
  const { carts } = useTypedSelector((state) => state.carts);
  const dispatch = useDispatch();
  const handleRemoveAllItem = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(RemoveAllItemFromCarts());
  };

  return (
    <div className="section-header-cart">
      <Link to="/" className="cart-navbar-back">
        <svg
          style={{ height: "60%", width: "60%" }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 6.99997H3.82998L8.70998 2.11997C9.09998 1.72997 9.09998 1.08997 8.70998 0.699971C8.31998 0.309971 7.68998 0.309971 7.29998 0.699971L0.70998 7.28997C0.31998 7.67997 0.31998 8.30997 0.70998 8.69997L7.29998 15.29C7.68998 15.68 8.31998 15.68 8.70998 15.29C9.09998 14.9 9.09998 14.27 8.70998 13.88L3.82998 8.99997H15C15.55 8.99997 16 8.54997 16 7.99997C16 7.44997 15.55 6.99997 15 6.99997Z"
            fill="#fff"
          />
        </svg>
      </Link>
      <>
        {carts.length === 0 ? null : (
          <button
            onClick={handleRemoveAllItem}
            className="delete-all-cart-item"
          >
            <svg
              style={{ marginRight: "0.5rem" }}
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
            Empty Cart
          </button>
        )}
      </>
    </div>
  );
}

export default NavbarCart;
