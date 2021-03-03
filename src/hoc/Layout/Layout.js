import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import './Layout.css';

const Layout = props => {
    // state = {
    //     showSideDrawer: false,
    // }
    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

    const sideDrawerCloseHandler = () => {
        setSideDrawerVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerVisible(!sideDrawerVisible)
    }

    // const sideDrawerHandler = (prevState) => {
    //     setSideDrawerVisible({sideDrawerVisible: !prevState.sideDrawerVisible})
    // }

        return (
            <Aux>
                <Toolbar 
                    isAuth={props.isAuthenticated}
                    openToolBar={sideDrawerToggleHandler}
                />
                <SideDrawer 
                    isAuth={props.isAuthenticated}
                    open={sideDrawerVisible} 
                    closed={sideDrawerCloseHandler} />
                <main className="Content">
                    {props.children}
                </main>
            </Aux>
        )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);