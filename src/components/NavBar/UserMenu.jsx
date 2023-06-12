import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/auth/auth-operations';
import { getUser } from '../../Redux/auth/auth-selectors';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name && <h3>{name}</h3>}
      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;