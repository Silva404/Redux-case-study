import React from 'react';

import './index.css';

import logo from '../../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

const SignIn = () => {
  const { error, loadingSignInRequest, token, isSignedIn } = useSelector((state: StoreState) => state.auth)
  const dispatch = useDispatch();
  console.log(error);

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="tests21" />
      <input type="password" defaultValue={error ? 'error' : "12345678"} />
      <button onClick={() => dispatch(signInRequest({ email: 'teste', password: '' }))} > {isSignedIn ? 'Logou' : 'Entrar'}</button>
    </div>
  );
}

export default SignIn;