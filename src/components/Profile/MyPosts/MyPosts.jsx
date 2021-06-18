import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({postsData}) => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={`${s.posts}`}>
        {postsData.map((obj) => (
          <Post key={obj.id} message={obj.message} likeCount={obj.likeCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
