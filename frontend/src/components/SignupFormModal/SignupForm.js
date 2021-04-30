import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import welp from "../../components/Navigation/welpNav.png"

function SignupFormPage({ setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }

        if (sessionUser) setShowModal(false)
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="sign-up--container">
            <div className="welpImg">
                <img src={welp}></img>
            </div>
            <div
            className="sign_up-text">...Sign Up</div>

            <form className="signup__form" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <input
                    className="input-field"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                className="input-field"
                    placeholder="User Name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                className="input-field"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"
                    required
                />
                <input
                className="input-field"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"
                    required
                />
                <input
                className="input-field"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />


                <input
                className="input-field"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button className="submit" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupFormPage;
