import React from 'react';
import { mount } from 'enzyme';
import { Home } from './index';

describe('<Home />', () => {
  it('Render component', () => {
    const wrapper = mount(<Home history={{ push: jest.fn() }} pocId={1} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('Render error', () => {
    const wrapper = mount(<Home error={{ message: 'Error' }} />);

    expect(wrapper.find('span').text()).toEqual('error');
  });

  it('Render loading', () => {
    const wrapper = mount(<Home loading />);

    expect(wrapper.find('Loading')).toHaveLength(1);
  });
});
