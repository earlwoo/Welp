import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './LoginForm.css'

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (user) {
      setCredential('')
      setPassword('')
      setShowModal(false)
    }

  };

  const handleDemo = (e) => {
    e.preventDefault()
    setErrors([]);

    dispatch(sessionActions.login({
      credential: 'demo@user.io',
       password: 'password'
    })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (user) {
      setCredential('')
      setPassword('')
      setShowModal(false)
    }

  }

  return (
    <div className='login__modal--show'>
      <form className='login__form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Username or Email"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <button
        onClick={handleDemo}>Demo User
      </button>
    </div>
  );
}

export default LoginForm;
