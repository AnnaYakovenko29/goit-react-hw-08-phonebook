import { NavLink } from 'react-router-dom';
const NavBarAuth = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="registration">
            Registration
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBarAuth;