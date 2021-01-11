import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer})
    }

    render() {
        return (
            <Aux>
                <Toolbar openToolBar={this.sideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;