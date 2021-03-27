import React from 'react';
import styled from 'styled-components';
import ProductCard from './product-card';

const ProductList = ({ data, loading, error }) => {
  if (loading) {
    return <h1>LOADING</h1>;
  }

  if (error || !data) {
    return <h1>DEU MERDA</h1>;
  }

  const { products } = data.poc;
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

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default ProductList;