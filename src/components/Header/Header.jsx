import React from "react";
import classes from "./Header.module.css";
import loupe from "../../static/search_instument.png";
import View_Card from "../../static/View_Card.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src={loupe} className={classes.loupe} />
        <input
          type="text"
          id="name"
          placeholder="Search..."
          className={classes.search}
        ></input>
      </div>
      <div>
        <div>
          <button>
            <img src={View_Card} className={classes.view_card} />
          </button>
        </div>
        <div>
          <a className={classes.login}>Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
