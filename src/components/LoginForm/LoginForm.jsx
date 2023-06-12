import InputField from '../../Redux/shared/components/InputField';
import useForm from '../../Redux/shared/useForm';
import Button from '../../Redux/shared/components/Button';
import fields from './fields';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
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