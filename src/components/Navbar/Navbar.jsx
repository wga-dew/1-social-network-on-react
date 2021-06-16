import React from "react";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/">Prfile</a>
      </div>
      <div className={s.item}>
        <a href="/">Messages</a>
      </div>
      <div className={s.item}>
        <a href="/">New</a>
      </div>
      <div className={s.item}>
        <a href="/">Music</a>
      </div>
      <div className={s.item}>
        <a href="/">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
