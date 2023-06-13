import { useState } from 'react';

import PropTypes from 'prop-types';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;
      return { ...prevState, [name]: newValue };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState(initialState);
  };
  return { state, setState, handleChange, handleSubmit };
};
export default useForm;

useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.element.isRequired,
};