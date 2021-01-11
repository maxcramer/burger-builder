import React from 'react';

import './BurgerBar.css';

const burgerBar = (props) => (
    <div className="BB_Container" onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default burgerBar;