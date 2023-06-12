import InputField from '../../Redux/shared/components/InputField';
import useForm from '../../Redux/shared/useForm';
import initialState from './initialState';
import fields from './fields';
import Button from '../../Redux/shared/components/Button';
const Registration = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, password, email } = state;
  return (
    <form onSubmit={handleSubmit}>
      <InputField value={name} onChange={handleChange} {...fields.name} />
      <InputField value={email} onChange={handleChange} {...fields.email} />
      <InputField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Register now</Button>
    </form>
  );
};
export default Registration;