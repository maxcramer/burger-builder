import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()}); // this line connects enzyme up!! without it enzyme WILL NOT WORK

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems isAuthenticated/>);
    });

    it('should render 2 nav <NavigationItems /> if not authenticated', () => {
        wrapper.setProps({isAuthenticated: false})
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    });

    it('should render 3 nav <NavigationItem /> if authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    }) 

    it('should be checking for node', () => {
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true)
    })
});

