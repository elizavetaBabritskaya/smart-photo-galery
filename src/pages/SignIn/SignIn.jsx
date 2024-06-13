import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { UPDATE_AUTH } from '../../reducers/authReducer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {useRegistrationMutation, useLoginMutation} from "../../store/authApi";
import Logo from "./images/logo.png"
import Arrow from './images/arrow.svg'
import PasswordInput from '../../components/PasswordInput/PasswordInput';

import "./SignIn.css"




const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
      const data = await login({email, password}).unwrap()
      localStorage.setItem("token", data.accessToken);
      dispatch(UPDATE_AUTH(true))
      // return navigate("/")
  }



  return (
      <div className='layout__sign'>
        <img src={Logo} alt=""/>
         <header className='title__sign'>
            <h1 className='title__sign'>Облако воспоминаний</h1>
          </header>
          <div className='content__sign'>
            <div className='sign__nav'>
              <Link className='nav__link' to="/registration">Зарегистрироваться</Link>
              <Link className='nav__link' to="/sign">Войти</Link>
            </div>
          <form className='form__reg'>
            <div className='form__input_email'>
              <label className='email__label' htmlFor='email'>E-mail</label>
              <input className="email__input" type='email' value={email} onChange={(event)=>{setEmail(event.target.value)}} />
            </div>
            <div className='form__input_password'>
              <PasswordInput value={password} onChange={(event)=>{setPassword(event.target.value)}} />
            </div>
          </form>
          <Link to="/" className='button__submit-sign' onClick={onSubmit}><img src={Arrow} alt=""/></Link>
        </div>

      </div>
  );}


export default SignIn;