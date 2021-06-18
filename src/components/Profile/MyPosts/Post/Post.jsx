import React from "react";

import s from "./Post.module.css";

const Post = ({message, likeCount}) => {
  return (
    <div className={`${s.item}`}>
      <img
        className={s.itemAvatar}
        src="https://alfateh.by/upload/upl_images/avatar2.png"
        alt="avatar icon png"
      />
      {message}
      <div>
        <span>like {likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
