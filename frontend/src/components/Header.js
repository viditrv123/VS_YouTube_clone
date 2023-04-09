import React from 'react'
import '../styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTube from '../assets/youtube.png'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon/>
        <img className='header__logo' alt="logo" src={YouTube}></img>
      </div>
      <div className='header__input'>
        <input type='text' placeholder='Search'></input>
        <SearchIcon className='header__input__button'/>
      </div>
      <div className='header__right'>
        <VideoCallIcon/>
        <AppsIcon />
        <NotificationsIcon/>
        <AccountCircleIcon />
      </div>
    </div>
    
  )
}

export default Header