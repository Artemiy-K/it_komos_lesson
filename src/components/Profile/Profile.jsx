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
      <div>
        <div className={classes.avatar}>
          <img src={test_avatar} />
        </div>

        <div className={classes.nickname}>
          <h3>Asemai</h3>
        </div>

        <div className={classes.item_header_content}>
          <div>
            <h2 className={classes.user_id}>@user</h2>
          </div>
          <div className={classes.activity}>
            <span>Active 1 hour</span>
          </div>
        </div>

        <div className={classes.bp_wrap}>
          <div className={classes.row}>
            <ul className={classes.row_of_pages}>
              <li>
                <a title="Activity">
                  <span>Activity</span>
                </a>
              </li>
              <li>
                <a title="Profile">
                  <span className={classes.current}>Profile</span>
                </a>
              </li>
              <li>
                <a title="Friends">
                  <span>Friends</span>
                </a>
              </li>
              <li>
                <a title="Groups">
                  <span>Groups</span>
                </a>
              </li>
              <li>
                <a title="Forums">
                  <span>Forums</span>
                </a>
              </li>
              <li>
                <a title="Media">
                  <span>Media</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <MyPosts /> */}
    </div>
  );
};

export default Profile;
