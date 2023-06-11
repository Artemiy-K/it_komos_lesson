import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        my posts
        <textarea></textarea>
        <button>Add posts</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post text="heelllo" like_count="2" />
        <Post text="bye" like_count="5" />
        <Post text="sosi" like_count="3" />
      </div>
    </div>
  );
};

export default MyPosts;
