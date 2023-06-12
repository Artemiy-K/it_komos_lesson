import React from "react";
import classes from "./Navbar.module.css";
// Activity, Photos, Watch, People, Groups, Adverts, Shop, Jobs, Forums, Blog

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.profile}>
        <img
          src="https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-icon.svg"
          className={classes.avatar}
        />
      </div>

      <div className={classes.item}>
        <a>Message</a>
      </div>

      <div className={classes.item}>
        <a>Activity</a>
      </div>
      <div className={classes.item}>
        <a>Watch</a>
      </div>

      <div className={classes.item}>
        <a>People</a>
      </div>

      <div className={classes.item}>
        <a>Groups</a>
      </div>

      <div className={classes.item}>
        <a>News</a>
      </div>

      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Adverts</a>
      </div>

      <div className={classes.item}>
        <a>Shop</a>
      </div>

      <div className={classes.item}>
        <a>Jobs</a>
      </div>
      <div className={classes.item}>
        <a>Forums</a>
      </div>

      <div className={classes.item}>
        <a>Blog</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
