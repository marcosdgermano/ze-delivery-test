import React from 'react';
import { shallow, mount } from 'enzyme';
import AddressField from '../address-field';

describe('<AddressField />', () => {
  it('Render component', () => {
    const wrapper = shallow(<AddressField />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('Set address', () => {
    const props = {
      onSubmit: jest.fn(),
    };
    const wrapper = mount(<AddressField {...props} />);

    const input = wrapper.find('TextInput');
    const button = wrapper.find('Button');

    input.simulate('change', { target: { name: 'address', value: 'Rua Américo Brasiliense, São Paulo' } });
    button.simulate('click');

    expect(props.onSubmit).toBeCalled();
  });
});
