import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://img.freepik.com/vektoren-kostenlos/goldener-vogel-logo-design_1195-336.jpg?w=2000"
        className="img-lol"
      />
    </header>
  );
};

export default Header;
