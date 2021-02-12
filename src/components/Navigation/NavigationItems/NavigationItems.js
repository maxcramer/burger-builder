import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';


import './NavigationItems.css';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem exact link="/" >
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/orders">
            Orders
        </NavigationItem>
        <NavigationItem link="/auth">
            Authenticate
        </NavigationItem>
    </ul>
);

export default navigationItems;