import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from '../index';

describe('<ProductCard />', () => {
  const props = {
    name: 'Brahma',
    image: 'mock/testurl.jpg',
    price: '5.49',
  };

  it('Should render the component correctly', () => {
    const wrapper = shallow(<ProductCard {...props} />);

    expect(wrapper.find('Name').text()).toEqual('Brahma');
    expect(wrapper.find('Price').text()).toEqual('R$ 5,49');
    expect(wrapper.find('Image').props().src).toEqual('mock/testurl.jpg');
  });
});
