import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import SearchBar from "./SearchBar"
import logo from './welpNav.png'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state=> state.users)

  let user;
  if(users && sessionUser) {
    user = users[sessionUser.id]
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={user} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }




  return (
    <nav className="nav__container">
      <div className="nav__home">
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
        </NavLink>
      </div>
      <img className='logo__img' alt="welp logo"src={logo}></img>
      <SearchBar />
      <div className="user__div">
        <div className="user_welcome">{user?.firstName}</div>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
