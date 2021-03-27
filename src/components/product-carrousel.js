import React from 'react';
import styled from 'styled-components';
import ProductCard from './product-card';
import Loading from './loading';
import { withProducts } from '../services/products';

const Content = ({ products }) => {
  if (products.length < 1) {
    return <NoProducts>Sem produtos para esta categoria</NoProducts>;
  }

  return (
    <List>
      {products.map(({ id, images, productVariants }) => (
        <ProductCard
          key={`product-${id}`}
          image={images[0].url}
          name={productVariants[0].title}
          price={productVariants[0].price}
        />
      ))}
    </List>
  );
};

const ProductCarrousel = ({ data, loading, error, categoryTitle }) => {
  if (loading) {
    return (
      <div>
        <Title>{categoryTitle}</Title>
        <Loading />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div>
        <Title>{categoryTitle}</Title>
        <NoProducts>Sem produtos para esta categoria</NoProducts>
      </div>
    );
  }

  const { products } = data.poc;
  return (
    <div>
      <Title>{categoryTitle}</Title>
      <Content products={products} loading />
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

const List = styled.div`
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

export default withProducts(ProductCarrousel);
