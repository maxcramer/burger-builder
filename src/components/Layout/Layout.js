import React from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;