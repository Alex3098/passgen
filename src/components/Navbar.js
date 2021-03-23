import React from "react";
import style from "./Navbar.module.css";
import logo from '../img/passgen-logo.svg';

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="Passgen" />
        </div>
      </div>
    </div>
  );
}
