import {  Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav_img">
        <NavLink to="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
            alt="sake sake"
          />
        </NavLink>
      </div>
      <ul className="item_row">
        <li>
          <NavLink to="/about" activeStyle={{ color: "#DA332E" }}>
            <h1>About</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" activeStyle={{ color: "#DA332E" }}>
            <h1>Order</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
