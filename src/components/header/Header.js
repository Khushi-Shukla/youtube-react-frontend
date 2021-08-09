import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div classname="header-left">
                <MenuIcon />
                <Link to="/">
                    <img className="header-logo" src="/images/youtubeLogo.png" />
                </Link>
            </div>
            
            <div className="header-input">
                <input onChange={ e=> setInputSearch(e.target.value) } value={inputSearch} placeholder="Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-input-button" />
                </Link>
            </div>
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar className="header-icon" src="data:image/png;base64,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"/>
            </div>
           
        </div>
    )
}

export default Header
