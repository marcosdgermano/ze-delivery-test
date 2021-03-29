import React from 'react';
import { shallow } from 'enzyme';
import { Products } from './index';

describe('<Products />', () => {
  const categories = [
    {
      title: 'cerveja',
      id: 1,
    },
    {
      title: 'vinhos',
      id: 2,
    },
  ];
  it('Render component', () => {
    const wrapper = shallow(<Products categories={categories} />);

    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('Render component', () => {
    const wrapper = shallow(<Products loading />);

    expect(wrapper.find('CustomLoading')).toHaveLength(1);
  });

  it('Render error', () => {
    const wrapper = shallow(<Products error={{ message: 'Error' }} />);

    expect(wrapper.find('ErrorMessage').text()).toEqual('Ocorreu um erro, tente novamente mais tarde!');
  });

  it('Render without categories', () => {
    const wrapper = shallow(<Products categories={[]} />);

    expect(wrapper.find('ErrorMessage').text()).toEqual('Ocorreu um erro, tente novamente mais tarde!');
  });
});
