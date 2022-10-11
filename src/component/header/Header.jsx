import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="head">
      <div className="header">
        <div className="logo">
          <h1 className="logoname">NETFLIX</h1>
        </div>
        <div className="list">
          <span className="hm"><button className="eng">English</button></span>
          <span className="ab"><button className="sign">Sign in</button></span>
          
        </div>
      </div>
    </section>
  );
};

export default Header;
