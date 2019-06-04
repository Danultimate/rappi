import React from 'react';
import Filters from './Filters';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Filters', () => {
  configure({ adapter: new Adapter() });

  it('renders properly', () => {
    const props = {};
    const wrapper = shallow(<Filters {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
