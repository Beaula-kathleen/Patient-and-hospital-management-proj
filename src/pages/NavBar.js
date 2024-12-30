import React, { useState } from "react";
import style from "../styles/navBar.module.css";
import { Link } from "react-router";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className={style.header} id="header">
        <nav className={style.nav.container}>
          <a href="/" className={style.nav__logo}>
            Logo
          </a>

          <div className={style.nav__menu} id="nav-menu">
            <ul className={style.nav__list}>
              <li className={style.nav__item}>
                <a href="/" className={style.nav__link}>
                  Home
                </a>
              </li>

              <li className={style.nav__item}>
                <a href="#" className={style.nav__link}>
                  About Us
                </a>
              </li>

              <li className={style.nav__item}>
                <a href="#" className={style.nav__link}>
                  Services
                </a>
              </li>

              <li className={style.nav__item}>
                <a href="#" className={style.nav__link}>
                  Featured
                </a>
              </li>

              <li className={style.nav__item}>
                <a href="#" className={style.nav__link}>
                  Contact Me
                </a>
              </li>

              <li>
                <a href="#" className={style.nav__link}>
                  <Link to={"loginAndSignin"} className={style.nav__link}>
                    <i
                      className="ri-user-line nav__login"
                      id="login-btn"
                      style={{
                        borderRadius: "50%",
                        border: "2px solid",
                        padding: "2%",
                      }}
                    ></i>
                    &nbsp;Login
                  </Link>
                </a>
              </li>
            </ul>

            {/* <!-- Close button -->
               <div class="nav__close" id="nav-close">
                  <i class="ri-close-line"></i>
               </div> */}
          </div>

          {/* <div class="nav__actions">
               <!-- Search button -->
               <i class="ri-search-line nav__search" id="search-btn"></i>

               <!-- Login button -->
               <i class="ri-user-line nav__login" id="login-btn"></i>

               <!-- Toggle button -->
               <div class="nav__toggle" id="nav-toggle">
                  <i class="ri-menu-line"></i>
               </div>
            </div> */}
        </nav>
      </header>
    </>
  );
}

export default NavBar;
