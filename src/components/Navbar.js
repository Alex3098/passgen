import React from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>PassGen</div>
      </div>
    </div>
  );
}
