import React from "react";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="main">
        <h1 className="um">Unlimited Movies,tv </h1>
        <h2 className="sm">Show and More</h2>
        <h3 className="aw">watch any where. cancel any time</h3>
        <h4 className="pp">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>

        <form>
          <input type="text" placeholder="email address" className="fm" />
          <button className="bt">Get started</button>
        </form>
      </div>
    </>
  );
};

export default Main;
