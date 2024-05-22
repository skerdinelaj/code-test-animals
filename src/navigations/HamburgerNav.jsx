import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
export default function HamburgerNav() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  const handleClose = () => {
    setToggleIcon(false);
  };
  return (
    <nav id="hamburger-nav">
      <div className="hamburger-menu">
        <div
          className={toggleIcon ? "hamburger-icon open" : "hamburger-icon"}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={toggleIcon ? "menu-links open" : "menu-links"}>
          <NavLinks handleClose={handleClose} />
        </div>
      </div>
    </nav>
  );
}
