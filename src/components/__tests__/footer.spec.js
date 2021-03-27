import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../footer';

describe('<Footer />', () => {
  it('Should render the component correctly', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
