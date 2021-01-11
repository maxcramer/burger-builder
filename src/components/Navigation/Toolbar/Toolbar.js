import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>Menu</div>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
           <NavigationItems />
        </nav>
    </header>
);

export default toolbar;