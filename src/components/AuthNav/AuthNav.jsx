import React from "react";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.navRight}>
      <NavLink to="/register" className={css.navLink} >
        Register
      </NavLink>
      <NavLink to="/login" className={css.navLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
