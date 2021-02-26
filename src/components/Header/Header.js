import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './../HeaderOptions/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">

            <div className="header-left">
                <img src="http://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo"/>

                <div className="header-search">
                    {/* search-icon */}
                    <SearchIcon/>
                    <input type="text"/>
                </div>

            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFCr9kBGTvd6w/profile-displayphoto-shrink_100_100/0/1605009736929?e=1619654400&v=beta&t=Ty1-9gAtjkzSjYwVn5sw63RuYJyCZFMPWk_32abXleo" title="me" />
            </div>
        </div>
    )
}

export default Header
