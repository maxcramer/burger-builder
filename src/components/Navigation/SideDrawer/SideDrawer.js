import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

import './SideDrawer.css';

const sideDrawer = (props) => {

    return (
    <div className="SideDrawer">
        <Logo height="11%"/>
        <nav>
            <NavigationItems />
        </nav>
    </div>
    );
};

export default sideDrawer;