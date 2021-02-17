import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()}); // this line connects enzyme up!! without it enzyme WILL NOT WORK

describe('<NavigationItems />', () => {
    it('should render 2 nav <NavigationItems /> if not authenticated', () => {
        adapter
    })
});