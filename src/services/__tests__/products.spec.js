import React from 'react';
import { mount } from 'enzyme';
import * as apollo from '@apollo/client';
import { withProducts, withCategories } from '../products';

jest.mock('@apollo/client');

describe('withProducts', () => {
  const mockResult = {
    poc: {
      products: [
        {
          id: 1,
          images: [
            {
              url: 'mock/testurl.jpg',
            },
          ],
          productVariants: [
            {
              price: 5.49,
              title: 'Brahma',
            },
          ],
        },
      ],
    },
  };

  it('With loading', async () => {
    apollo.useQuery.mockReturnValue({ loading: true, error: null, data: null });

    const DumbComponent = () => null;
    const Wrapped = withProducts(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().loading).toBe(true);
  });

  it('With products', async () => {
    apollo.useQuery.mockReturnValue({ loading: false, error: null, data: mockResult });

    const DumbComponent = () => null;
    const Wrapped = withProducts(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().products).toHaveLength(1);
  });

  it('With error', async () => {
    apollo.useQuery.mockReturnValue({ loading: false, error: { message: 'Error' }, data: null });

    const DumbComponent = () => null;
    const Wrapped = withProducts(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().error).toEqual({ message: 'Error' });
  });
});

describe('withCategories', () => {
  const mockResult = {
    allCategory: [
      {
        title: 'Cerveja',
        id: 1,
      },
    ],
  };

  it('With loading', async () => {
    apollo.useQuery.mockReturnValue({ loading: true, error: null, data: null });

    const DumbComponent = () => null;
    const Wrapped = withCategories(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().loading).toBe(true);
  });

  it('With categories', async () => {
    apollo.useQuery.mockReturnValue({ loading: false, error: null, data: mockResult });

    const DumbComponent = () => null;
    const Wrapped = withCategories(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().categories).toHaveLength(1);
  });

  it('With error', async () => {
    apollo.useQuery.mockReturnValue({ loading: false, error: { message: 'Error' }, data: null });

    const DumbComponent = () => null;
    const Wrapped = withCategories(DumbComponent);
    const wrapper = mount(<Wrapped />);

    expect(wrapper.find('DumbComponent').props().error).toEqual({ message: 'Error' });
  });
});
