import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import style from "./buttonToTop.module.css";

export default function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`${style["top-to-btm"]}`}>
      {" "}
      {isVisible && (
        <FaChevronUp
          className={`${style["icon-position"]} ${style["icon-style"]}`}
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
}
