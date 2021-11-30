import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const header = document.getElementById("navbar");
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
      header?.classList.add("sticky");
    } else if (scrolled <= 200) {
      setVisible(false);
      header?.classList.remove("sticky");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="wrapper-scroll-to-top">
      <button
        title="Scroll To Top"
        className="button-scroll-up"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <svg
          style={{ height: "100%", width: "100%" }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00021 15V3.82998L13.8802 8.70998C14.2702 9.09998 14.9102 9.09998 15.3002 8.70998C15.6902 8.31998 15.6902 7.68998 15.3002 7.29998L8.71021 0.70998C8.32021 0.31998 7.69022 0.31998 7.30022 0.70998L0.700215 7.28998C0.310215 7.67998 0.310215 8.30998 0.700215 8.69998C1.09021 9.08998 1.72022 9.08998 2.11022 8.69998L7.00022 3.82998V15C7.00022 15.55 7.45021 16 8.00022 16C8.55021 16 9.00021 15.55 9.00021 15Z"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollButton;
