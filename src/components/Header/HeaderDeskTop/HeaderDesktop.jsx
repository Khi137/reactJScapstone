import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logo/logo.png";
import ScrollHeader from "../../Scroll/ScrollHeader";
import UserNavbarLoginDesktop from "./UserNavbarLoginDesktop/UserNavbarLoginDesktop";
import UserNavbarLogOutDesktop from "./UserNavbarLogOutDesktop/UserNavbarLogOutDesktop";

const HeaderDesktop = () => {
  const scrollDirection = ScrollHeader();
  const { infoUser } = useSelector((state) => state.userReducer);

  let renderUserNavDesktop = () => {
    if (infoUser) {
      return <UserNavbarLoginDesktop infoUser={infoUser} />;
    } else {
      return <UserNavbarLogOutDesktop />;
    }
  };

  return (
    <div
      style={{
        transition: "0.5s",
        background: "rgba(0, 0, 0, 0.9)",
      }}
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } py-2  z-30 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center  px-10">
        <NavLink to={"/"} className="text-3xl font-extrabold">
          <div className="flex justify-between items-center">
            <img src={logo} className="w-20" alt="" />
            <span className="text-blue-300">AnhTranCinema</span>
          </div>
        </NavLink>

        <div className="text-white">{renderUserNavDesktop()}</div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
