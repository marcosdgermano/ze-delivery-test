import React from 'react';
import { mount } from 'enzyme';
import { useLazyQuery } from '@apollo/client';
import { withPoc } from '../poc';

jest.mock('@apollo/client', () => ({
  __esModule: true,
  useLazyQuery: jest.fn(),
}));

jest.mock('../location', () => ({
  __esModule: true,
  getGeoLocation: jest.fn().mockReturnValueOnce({ lat: '1', lng: '1' }).mockReturnValueOnce(null),
}));

describe('withProducts', () => {
  const mockResult = {
    pocSearch: [
      {
        id: '1',
      },
    ],
  };

  it('With data', () => {
    useLazyQuery.mockImplementation(() => [f => f, { loading: false, error: false, data: mockResult }]);

    const DumbComponent = () => null;
    const Wrapped = withPoc(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().pocId).toEqual('1');
  });

  it('Trigger getPoc', async () => {
    const fetchDistributor = jest.fn();
    useLazyQuery.mockImplementation(() => [fetchDistributor, { loading: false, error: false }]);

    const DumbComponent = () => null;
    const Wrapped = withPoc(DumbComponent);
    const wrapper = mount(<Wrapped />);

    await wrapper.find('DumbComponent').props().getPoc();
    expect(fetchDistributor).toHaveBeenCalled();
  });

  it('Trigger getPoc without location', async () => {
    const fetchDistributor = jest.fn();
    useLazyQuery.mockImplementation(() => [fetchDistributor, { loading: false, error: false }]);

    const DumbComponent = () => null;
    const Wrapped = withPoc(DumbComponent);
    const wrapper = mount(<Wrapped />);

    await wrapper.find('DumbComponent').props().getPoc();
    expect(fetchDistributor).not.toHaveBeenCalled();
  });
});
