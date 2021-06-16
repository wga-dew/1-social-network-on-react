import React from "react";

import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://jooinn.com/images/nature-319.jpg"
          alt="nature nature.jpg"
        />
      </div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
