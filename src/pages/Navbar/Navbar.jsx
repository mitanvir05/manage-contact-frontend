import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img className="bg-transparent" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white text-xl font-semibold">
             <Link to="/manage">Manage Form</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
