import React from 'react';

import './Logo.css';

import BurgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}} >
        <img src={BurgerLogo} alt="burger logo" />
    </div>
);

export default logo;