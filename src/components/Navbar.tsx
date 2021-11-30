import React from "react";
import { useTypedSelector } from "hooks";
import { Link } from "react-router-dom";

function Navbar() {
  const { carts } = useTypedSelector((state) => state.carts);

  return (
    <>
      <div className="section-header">
        <div className="header-title">
          <h1 className="title">Sopcart</h1>
        </div>
        <div id="navbar">
          <div className="navbar-wrapper">
            <Link to="/cart" className="cart-wrapper">
              (<span className="cart-icon">{carts.length}</span>) Cart
            </Link>
            <button className="profile-btn">Profile</button>
            <button className="logout-btn">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.3 4.7C7.91 5.09 7.91 5.71 8.3 6.1L10.2 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H10.2L8.3 11.9C7.91 12.29 7.91 12.91 8.3 13.3C8.69 13.69 9.31 13.69 9.7 13.3L13.29 9.71C13.68 9.32 13.68 8.69 13.29 8.3L9.7 4.7C9.31 4.31 8.69 4.31 8.3 4.7ZM18 16H11C10.45 16 10 16.45 10 17C10 17.55 10.45 18 11 18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H11C10.45 0 10 0.45 10 1C10 1.55 10.45 2 11 2H18V16Z"
                  fill="#9333ea"
                />
              </svg>
              <span style={{ paddingLeft: "0.5rem" }}>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
