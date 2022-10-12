import React from "react";
// import "./Header.css";
import "./header.css"

const Header = () => {
  return (
    
    <div className="header">
      <div>
        <h1>NETFLIX</h1>
      </div>
      <div className="bt1">
        <span>
          <button><i class="fa-solid fa-magnifying-glass"></i>search</button>
        </span>
        <span>
          <button>sign in</button>
        </span>
      </div>
    </div>
  );
};

export default Header;
