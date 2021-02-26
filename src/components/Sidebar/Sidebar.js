import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQG84JfO4_EAyQ/profile-displaybackgroundimage-shrink_200_800/0/1611572148287?e=1619654400&v=beta&t=zKXPVxoxEJkLbDzxpu5qUJbUXNEF7O9bwqzgbYzJaP4" alt=""/>
                <Avatar className="sidebar-avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQFCr9kBGTvd6w/profile-displayphoto-shrink_100_100/0/1605009736929?e=1619654400&v=beta&t=Ty1-9gAtjkzSjYwVn5sw63RuYJyCZFMPWk_32abXleo" />
                <h2>Ahmed Motawea</h2>
                <h4>amotawea217@gmail.com</h4>
            </div>

            <div className="sidebar-status">
                <div className="sidebar-stat">
                    <p>who viewed you</p>
                    <div className="sidebar-statNumber">2.543</div>
                </div>
                <div className="sidebar-stat">
                    <p>views on post</p>
                    <div className="sidebar-statNumber">2.448</div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('Design')}
                {recentItem('Develop')}
                {recentItem('Angular2')}
                {recentItem('Vue js')}
                {recentItem('React js')}
                {recentItem('Programming')}
                {recentItem('software Engineering')}
            </div>
        </div>
    )
}

export default Sidebar
