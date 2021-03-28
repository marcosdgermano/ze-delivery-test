import React from 'react';
import { shallow } from 'enzyme';
import { ProductCarousel } from '../product-carousel';

describe('<ProductCarousel />', () => {
  const products = [
    {
      id: '1',
      images: [{ url: 'mock/testurl.jpg' }],
      productVariants: [
        {
          title: 'Brahma',
          price: 'R$ 5,49',
        },
      ],
    },
    {
      id: '2',
      images: [{ url: 'mock/testurl.jpg' }],
      productVariants: [
        {
          title: 'Brahma',
          price: 'R$ 5,49',
        },
      ],
    },
  ];

  it('Render with products', () => {
    const wrapper = shallow(<ProductCarousel products={products} categoryTitle="cerveja" />);

    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('Render without products', () => {
    const wrapper = shallow(<ProductCarousel products={[]} categoryTitle="cerveja" />);

    expect(wrapper.find('NoProducts')).toHaveLength(1);
  });

  it('Render with error', () => {
    const wrapper = shallow(<ProductCarousel error={new Error()} categoryTitle="cerveja" />);

    expect(wrapper.find('NoProducts')).toHaveLength(1);
  });

  it('Render loading', () => {
    const wrapper = shallow(<ProductCarousel loading categoryTitle="cerveja" />);

    expect(wrapper.find('Loading')).toHaveLength(1);
  });
});
