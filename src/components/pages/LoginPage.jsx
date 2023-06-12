import LoginForm from '../LoginForm/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from '../../Redux/auth/auth-selectors';
import { login } from '../../Redux/auth/auth-operations';

// import css from './loginPage.module.scss';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;