import React from 'react';
import Product from './Product';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import products from '../../store/products.json';

describe('Product', () => {
  configure({ adapter: new Adapter() });

  it('renders properly', () => {
    const props = { ...products[0] };
    const wrapper = shallow(<Product {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
