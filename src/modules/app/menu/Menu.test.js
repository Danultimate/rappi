import React from 'react';
import Menu from './Menu';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import categories from '../store/categories.json';

describe('Menu', () => {
  configure({ adapter: new Adapter() });

  it('renders properly', () => {
    const props = { ...categories, filters: { sublevels: []} };
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
