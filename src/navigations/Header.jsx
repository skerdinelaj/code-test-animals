import { NavLink } from "react-router-dom";
import HamburgerNav from "./HamburgerNav";
import NavLinks from "./NavLinks";
export default function Header() {
  return (
    <main id="main-header">
      <h1>Animal Gallery</h1>
      <nav id="main-nav">
        <NavLinks/>
      </nav>
      <HamburgerNav/>
    </main>
  );
}
