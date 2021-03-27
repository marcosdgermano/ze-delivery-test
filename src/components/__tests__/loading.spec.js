import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../loading';

describe('<Loading />', () => {
  it('Should render the component correctly', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
