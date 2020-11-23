import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './index.css';

import logo from '../../assets/logo.png'
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';
import { error } from 'console';

const SignIn: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, error, token } = useSelector((state: StoreState) => state.auth)
  const dispatch = useDispatch();

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button onClick={() => dispatch(signInRequest({ email: 'test@email.com', password: "12345678" }))} >{loadingSignInRequest ? 'Carregando' : 'Entrar'}</button>
    </div>
  );
}

export default SignIn;