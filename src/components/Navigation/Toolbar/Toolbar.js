import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerBar from '../BurgerBar/BurgerBar';

import Logo from '../../Logo/Logo';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <BurgerBar click={props.openToolBar}/>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
           <NavigationItems  isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;