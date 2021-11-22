import React from "react";
import "./footer.css";
export const Footer = ({ developer }) => {
  return (
    <div className="footer">
      <p>
        Copy Right 2021 || Develop by <span>{developer}</span>
      </p>
    </div>
  );
};
