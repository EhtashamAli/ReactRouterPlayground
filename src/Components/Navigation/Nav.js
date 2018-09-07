import React from 'react';
import {NavLink} from 'react-router-dom';

const nav = () => (
    <nav>
        <NavLink to = "/">HOME</NavLink>
        <NavLink to = "/contact">CONTACT</NavLink>
        <NavLink to = "/about">ABOUT</NavLink>
    </nav>
) 
export default nav;