import Link from "next/link";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import React from "react";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={LogoImg.src} alt="A plate with food on it" />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
