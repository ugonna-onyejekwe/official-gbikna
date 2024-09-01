import "./navbar.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activateNav, setActivateNav] = useState(false);
  const { pathname } = useLocation();
  window.addEventListener("scroll", () => {
    window.scrollY > 10 ? setActivateNav(true) : setActivateNav(false);
  });
  return (
    <nav
      className={activateNav || isActive || pathname !== "/" ? "active" : ""}
    >
      <div className="container">
        <Link className="logo" to="/">
          <div>
            <img src={logo} alt="logo image" />
          </div>
        </Link>

        <div className={isActive ? "links_con active " : "links_con"}>
          <NavLink to="/" onClick={() => setIsActive(false)}>
            home
          </NavLink>

          <NavLink to="/products" onClick={() => setIsActive(false)}>
            products
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsActive(false)}>
            contact us
          </NavLink>
        </div>

        <div className="menu_btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <IoCloseSharp /> : <HiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
};
