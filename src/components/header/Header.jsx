import React from "react";
import "./style.scss";
import { HiOutlineSearch } from "react-icons/hi";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import logo from "../../assets/movie logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaHamburger } from "react-icons/fa";
const Header = () => {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(true);
  const navigationHandler = (type) => {
    if (type === "movies") {
      navigate("/explore/movies");
    } else {
      navigate("/explore/tv");
    }
  };

  // const openMobileMenu = () => {
  //   setMobileMenu(true);
  // };

  return (
    <header className={`header ${mobileMenu ? "" : "mobileView"}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        </div>

        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movies")}>
            Movies
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("tv-shows")}
          >
            Tv Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch />
          </li>
        </ul>

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <FaHamburger onClick={() => setMobileMenu(false)} />
          ) : (
            <VscChromeClose onClick={() => setMobileMenu(true)} />
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
