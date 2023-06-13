import { NavLink } from 'react-router-dom';
import './NavBarAuth.css'

const NavBarAuth = () => {
  return (
    <nav className='nav'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink  className='navbar-link' to="login">
            Login
          </NavLink>
        </li >
        <li className='navbar-item'>
          <NavLink  className='navbar-link' to="registration">
            Registration
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBarAuth;