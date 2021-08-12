import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';


function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon className="menu-icon" />
                <Link to="/">
                    <img className="header-logo" alt="logo" src={process.env.PUBLIC_URL +"/images/youtubeLogo.png"} />
                </Link>
            </div>
            
            {/* <div className="header-input">
                <input onChange={ e=> setInputSearch(e.target.value) } value={inputSearch} placeholder="Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-input-button" />
                </Link>
               
            </div> */}
            <div className="header-input" >
                <div className =" header-input-input ">
                    <InputBase  id="standard-name" onChange={ e=> setInputSearch(e.target.value) } value={inputSearch} placeholder="Search" />
                </div>
                <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header-input-button" />
                </Link>
            </div>
           
            
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar className="header-icon" src={process.env.PUBLIC_URL +"/images/avatar.png"}/>
            </div>
           
        </div>
    )
}

export default Header
