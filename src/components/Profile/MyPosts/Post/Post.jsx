import React from "react";

import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={`${s.item}`}>
      <img
        src="https://alfateh.by/upload/upl_images/avatar2.png"
        alt="avatar icon png"
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
