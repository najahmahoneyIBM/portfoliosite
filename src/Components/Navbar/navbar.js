import React from 'react'
import "@fontsource/montserrat"
import "../../index.css";

const navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navmenu navbar-container navbar-right'>
                <li><a href="./Work">Work</a></li>
                <li><a href="./Skill">Skills</a></li>
                <li><a href="./About">About me</a></li>
                <li><a href="./Contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default navbar;