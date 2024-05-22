import { NavLink } from "react-router-dom";

export default function NavLinks({ handleClose }) {
  return (
    <ul>
      <li>
        <NavLink onClick={handleClose} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink onClick={handleClose}  to="/about">About</NavLink>
      </li>
      <li>
        <NavLink onClick={handleClose} to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}
