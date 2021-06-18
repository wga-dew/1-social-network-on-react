import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogItem.module.css";

const DialogItem = ({ name, id }) => {
  const path = `/dialogs/${id}`;

  return (
    <NavLink
      to={path}
      className={`${s.dialogNav}`}
      activeClassName={s.active}
    >
      <div className={`${s.dialog}`}>
        <p className={`${s.dialogName}`}>{name}</p>
      </div>
    </NavLink>
  );
};

export default DialogItem;
