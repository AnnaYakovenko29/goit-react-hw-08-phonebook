import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-operations';
import PropTypes from 'prop-types';

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return <>{children}</>;
};
export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};