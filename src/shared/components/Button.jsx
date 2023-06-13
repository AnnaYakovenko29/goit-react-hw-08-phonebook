import './Button.css'

const Button = ({ children, type = 'submit' }) => {
  return (
    <button className='btn' type={type}>
      {children}
    </button>
  );
};
export default Button;