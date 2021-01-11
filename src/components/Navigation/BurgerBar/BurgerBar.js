import React from 'react';

import './BurgerBar.css';

const burgerBar = (props) => (
    <div className="BB_Container" onClick={props.click}>
        <div className="BB-Line"></div>
        <div className="BB-Line"></div>
        <div className="BB-Line"></div>
    </div>
);

export default burgerBar;