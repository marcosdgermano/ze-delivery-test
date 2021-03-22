import React from 'react';
import styled from 'styled-components';
import ProductsList from '../../components/product-list';
import { withProducts } from '../../services/products';

const Products = ({ data, error, loading }) => (
  <PageContainer>
    <ProductsList data={data} error={error} loading={loading} />
  </PageContainer>
);

const PageContainer = styled.div`
  min-height: 70vh;
`;

export default withProducts(Products);
