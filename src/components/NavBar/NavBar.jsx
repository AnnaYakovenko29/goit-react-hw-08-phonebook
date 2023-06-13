import NavBarAuth from './NavBarAuth';
import UserMenu from '../NavBar/UserMenu';

import { isUserLogin } from '../../Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div>
      {!isLogin && <NavBarAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};
export default NavBar;