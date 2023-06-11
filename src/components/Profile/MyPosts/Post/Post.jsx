import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-default-avatar-image_2238794.jpg"
          className={classes.avatar}
        />
        post - {props.text}
        <div>
          <span>{props.like_count} likes</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
