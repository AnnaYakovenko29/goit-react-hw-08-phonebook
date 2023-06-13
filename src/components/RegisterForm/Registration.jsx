import InputField from '../../shared/components/InputField';
import useForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import Button from '../../shared/components/Button';
import PropTypes from 'prop-types';
import './Registration.css'

const Registration = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, password, email } = state;
  return (
    <form className='registration-form' onSubmit={handleSubmit}>
      <InputField value={name} onChange={handleChange} {...fields.name} />
      <InputField value={email} onChange={handleChange} {...fields.email} />
      <InputField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button className=''>Register now</Button>
    </form>
  );
};
export default Registration;

Registration.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};