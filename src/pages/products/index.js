import React from 'react';
import styled from 'styled-components';
import ProductsCarrousel from '../../components/product-carrousel';
import { withCategories } from '../../services/products';

const Products = ({ data, error, loading }) => {
  if (!data) {
    return null;
  }

  const { allCategory } = data;

  if (!allCategory) {
    return null;
  }

  return (
    <PageContainer>
      <ProductsContainer>
        {allCategory.map(({ id, title }) => (
          <ProductsCarrousel key={`category-products-${id}`} categoryId={id} categoryTitle={title} />
        ))}
      </ProductsContainer>
    </PageContainer>
  );
};

const ProductsContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;

const PageContainer = styled.div`
  min-height: 70vh;
`;

export default withCategories(Products);
