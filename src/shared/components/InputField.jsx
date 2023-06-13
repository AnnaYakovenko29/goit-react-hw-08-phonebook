import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import './InputField.css'

const InputField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className='inputfield-wrap'>
      <label className='inputfield-label' htmlFor={id}>
        {label}
      </label>
      <input className='inputfield-input' id={id} onChange={handleChange} {...props} />
    </div>
  );
};
export default InputField;