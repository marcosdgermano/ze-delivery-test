import React from 'react';
import styled from 'styled-components';
import ProductCard from './product-card';
import Loading from '../../../components/loading';
import { withProducts } from '../../../services/products';
import { getCart } from '../../../services/cart';

export const ProductCarousel = ({ products, loading, error, categoryTitle }) => {
  if (loading) {
    return (
      <div>
        <Title>{categoryTitle}</Title>
        <Loading />
      </div>
    );
  }

  if (error || products?.length < 1) {
    return (
      <div>
        <Title>{categoryTitle}</Title>
        <NoProducts>Sem produtos para esta categoria</NoProducts>
      </div>
    );
  }

  const cart = getCart();

  return (
    <div>
      <Title>{categoryTitle}</Title>
      <List>
        {products.map(({ id, images, productVariants }) => (
          <li key={`product-${id}`}>
            <ProductCard
              id={id}
              isSelected={cart.includes(id)}
              image={images[0].url}
              name={productVariants[0].title}
              price={productVariants[0].price}
            />
          </li>
        ))}
      </List>
    </div>
  );
};

const Title = styled.h2`
  @media (max-width: 1023px) {
    font-size: 3em;
  }
`;

const NoProducts = styled.p`
  text-align: center;
  font-size: 45px;

  @media (max-width: 1023px) {
    font-size: 3em;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  justify-content: center;

  @media (max-width: 1200px) and (min-width: 1024px) {
    grid-template-columns: 21% 21% 21% 21% 21%;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto hidden;
    justify-content: flex-start;
  }
`;

export default withProducts(ProductCarousel);
