import React from 'react';
import styled from 'styled-components';
import ProductsList from '../components/product-list';

const Products = () => (
  <PageContainer>
    <ProductsList />
  </PageContainer>
);

const PageContainer = styled.div`
  margin-top: 135px;
`;

export default Products;
