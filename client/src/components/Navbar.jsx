import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "../components/Navbar.css"
const Navbar = () => {
     return (
          <header>
               <div className="container">
                    <div className="logo-brand">
                         <a href="/">Salman Farcy</a>
                    </div>

                    <nav>
                         <ul className="item">
                              {/* <li><NavLink to="/">Home</NavLink></li>
                              <li><NavLink to="/about">About</NavLink></li>
                              <li><NavLink to="/contact">Contact</NavLink></li>
                              <li><NavLink to="/service">Service</NavLink></li>
                              <li><NavLink to="/register">Register</NavLink></li>
                              <li><NavLink to="/login">Login</NavLink></li> */}
                              

                              <li><Link to={"/"}>Home</Link></li>
                              <li><Link to={"/about"}>About</Link></li>
                              <li><Link to={"/contact"}>Contact</Link></li>
                              <li><Link to={"/service"}>Service</Link></li>
                              <li><Link to={"/register"}>Register</Link></li>
                              <li><Link to={"/login"}>Login</Link></li>
                         </ul>
                    </nav>
               </div>
          </header>
     );
};

export default Navbar;