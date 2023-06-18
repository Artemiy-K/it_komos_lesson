import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import test_shapka from "../../static/test_shapka.jpg";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.schapka}>
        <img src={test_shapka}></img>
      </div>
      <div>ava + description</div>

      {/* <MyPosts /> */}
    </div>
  );
};

export default Profile;
