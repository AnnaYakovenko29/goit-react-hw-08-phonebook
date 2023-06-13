import InputField from '../../shared/components/InputField';
import useForm from '../../shared/hooks/useForm';
import Button from '../../shared/components/Button';
import fields from './fields';
import initialState from './initialState';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form className='loginform-form' onSubmit={handleSubmit}>
      <InputField value={email} onChange={handleChange} {...fields.email} />
      <InputField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login now</Button>
    </form>
  );
};
export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};