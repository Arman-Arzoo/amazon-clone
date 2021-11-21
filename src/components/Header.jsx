import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <img src="" alt="" className="header__logo" />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionOne">Hello Arman</span>
          <span className="header__navOptionTwo">Sign in</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionOne">Hello Arman</span>
          <span className="header__navOptionTwo">Sign in</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionOne">Hello Arman</span>
          <span className="header__navOptionTwo">Sign in</span>
        </div>
      </div>
    </div>
  );
};
