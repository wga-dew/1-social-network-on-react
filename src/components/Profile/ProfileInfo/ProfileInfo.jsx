import React from "react";

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={`${s.profileHead}`}>
      <div>
        <img
          src="https://jooinn.com/images/nature-319.jpg"
          alt="nature nature.jpg"
        />
      </div>
      <div className={`${s.descriptionBlock}`}>
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
