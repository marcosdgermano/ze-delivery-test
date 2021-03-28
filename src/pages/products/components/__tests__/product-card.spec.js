import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductCard from '../product-card';

describe('<ProductCard />', () => {
  const props = {
    name: 'Brahma',
    image: 'mock/testurl.jpg',
    price: '5.49',
  };

  it('Render component', () => {
    const wrapper = shallow(<ProductCard {...props} />);

    expect(wrapper.find('Name').text()).toEqual('Brahma');
    expect(wrapper.find('Price').text()).toEqual('R$ 5,49');
    expect(wrapper.find('Image').props().src).toEqual('mock/testurl.jpg');
  });

  it('Update cart', () => {
    const wrapper = mount(<ProductCard {...props} />);

    wrapper.find('AddButton').simulate('click');
    expect(wrapper.find('AddButton').props().selected).toBe(true);

    wrapper.find('AddButton').simulate('click');
    expect(wrapper.find('AddButton').props().selected).toBe(false);
  });
});
