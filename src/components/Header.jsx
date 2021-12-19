import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBustketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const buskets = useSelector((state) => state.busket);

  return (
    <>
      <div className="header">
        <NavLink to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY_ABgnclSsHClv2v1T-CJ3taKt16phhwe-FzXWg6qM4A5oEK-xHmNr7RH8KRPeZk7A&usqp=CAU"
            alt=""
            className="header__logo"
          />
        </NavLink>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <NavLink to="/login">
            <div className="header__navOption">
              <span className="header__navOptionLineOne">Hello </span>
              <span className="header__navOptionLineTwo">Sign in</span>
            </div>
          </NavLink>

          <div className="header__navOption">
            <span className="header__navOptionLineOne">Retrun</span>
            <span className="header__navOptionLineTwo">& Orders</span>
          </div>

          <div className="header__navOption">
            <span className="header__navOptionLineOne">Your</span>
            <span className="header__navOptionLineTwo">Prime</span>
          </div>

          <NavLink to="/checkout">
            <div className="header__navOptionBusket">
              <ShopingBustketIcon />
              <span className="header__navbusketCount header__navOptionLineTwo">
                {buskets.length}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
