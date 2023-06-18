import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import test_shapka from "../../static/test_shapka.jpg";
import test_avatar from "../../static/test_avatar.png";
import test_shapka2 from "../../static/test_shapka2.png";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.schapka}>
        <img src={test_shapka2}></img>
      </div>
      {/* <div>ava + name + description + @id + activity</div> */}

      <div className={classes.avatar}>
        <img src={test_avatar} />
      </div>

      <div></div>
      {/* <MyPosts /> */}
    </div>
  );
};

export default Profile;
