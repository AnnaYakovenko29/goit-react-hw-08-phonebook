import Registration from '../RegisterForm/Registration';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from '../../Redux/auth/auth-selectors';
import { signup } from '../../Redux/auth/auth-operations';

// import css from './registerPage.module.scss';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>Registration</h1>
      <Registration onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;