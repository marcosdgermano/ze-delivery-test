import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

describe('<Header />', () => {
  it('Should render the component correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
