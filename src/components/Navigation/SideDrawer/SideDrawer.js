import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import Logo from '../../Logo/Logo';

import './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [`SideDrawer Close`];
    if(props.open) {
        attachedClasses = [`SideDrawer Open`]
    } 
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className="LogoContainer">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;