import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          className={classes.schapka}
        ></img>
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
          <div className={classes.item}>post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
