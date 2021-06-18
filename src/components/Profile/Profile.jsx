import React from "react";

import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state: {postsData}}) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
