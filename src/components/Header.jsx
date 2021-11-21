import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
export const Header = () => {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY_ABgnclSsHClv2v1T-CJ3taKt16phhwe-FzXWg6qM4A5oEK-xHmNr7RH8KRPeZk7A&usqp=CAU"
        alt=""
        className="header__logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionOne">Hello Arman</span>
          <span className="header__navOptionTwo">Sign in</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionOne">Retrun</span>
          <span className="header__navOptionTwo">& Orders</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionOne">Your</span>
          <span className="header__navOptionTwo">Prime</span>
        </div>
      </div>
    </div>
  );
};
