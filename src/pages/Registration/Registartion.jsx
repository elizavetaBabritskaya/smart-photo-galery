import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {useRegistrationMutation} from "../../store/authApi";
import Logo from "./images/logo.png";
import Arrow from "./images/arrow.svg"
import PasswordInput from '../../components/PasswordInput/PasswordInput';

import "./Registration.css"




const Regestration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [registrete, {isLoading}] = useRegistrationMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [addParagrath, setAddParagrath] = useState(false);
  const [error, setError] = useState(0)

  const onSubmit = async () => {
      if(name!=="" && password!=="" && email!=="") {
        setAddParagrath(false)
      const data = await registrete({"name": name, "email":email, "password":password}).unwrap()
       navigate("/sign")}
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
          <div className='form__input_name'>
              <label className='name__label' htmlFor='text'>Имя</label>
              <input className="name__input" type='text' value={name} onChange={(event)=>{setName(event.target.value)}} />
            </div>
            <div className='form__input_email'>
              <label className='email__label' htmlFor='email'>E-mail</label>
              <input className="email__input" type='email' value={email} onChange={(event)=>{setEmail(event.target.value)}} />
            </div>
            <div className='form__input_password'>
              <PasswordInput value={password} onChange={(event)=>{setPassword(event.target.value)}} />
            </div>
          </form>
          <Link to="/sign" className='button__submit' onClick={onSubmit}><img src={Arrow}/></Link>
        </div>

      </div>
  );}


export default Regestration;
