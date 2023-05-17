import React, {useState, useEffect } from "react";
import PropTypes from 'prop-types';


import './PasswordInput.css'

const PasswordInput = ({
  className="",
  onChange=()=>{}
}) => {
  const [isShown, setIsShown] = useState(false);
  const togglePassword = () => {
    setIsShown(!isShown);}

  return(
  <div className={`form__input_password ${className}`}>
    <label className="label__password" htmlFor='password'>Пароль</label>
    <div className="password__window">
    <input className="input__password" onChange={onChange} type={isShown ? "text" : "password"} />
      {isShown && <div className="password__icon" onClick={togglePassword}></div>}
      {!isShown && <div className="password__iconIsShow" onClick={togglePassword}></div>}      
    </div>
    
  </div>
  )};

  PasswordInput.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  PasswordInput.defaultProps = {
    className: "",
    onClick: {}
  }

  export default PasswordInput;
