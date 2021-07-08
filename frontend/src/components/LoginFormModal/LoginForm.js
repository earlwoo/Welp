import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './LoginForm.css'
import welp from "../../components/Navigation/welpNav.png"

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
    <div className='login--container'>
      <div className="welpImg">
        <img src={welp} alt="Welp logo"></img>
      </div>
      <div
        className="login-text">Log In</div>
      <form className='login__form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          className="input-field"
          type="text"
          placeholder="Username or Email"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit" type="submit">Log In</button>
      </form>
      <button
        className="submit demo"
        onClick={handleDemo}>Demo User
      </button>
    </div>
  );
}

export default LoginForm;
