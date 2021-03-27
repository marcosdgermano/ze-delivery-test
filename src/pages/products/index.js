import React from 'react';
import styled from 'styled-components';
import ProductsCarrousel from './components/product-carrousel';
import { withCategories } from '../../services/products';
import Loading from '../../components/loading';

const Products = ({ data, error, loading }) => {
  if (loading) {
    return (
      <PageContainer>
        <PageLoading>
          <CustomLoading />
        </PageLoading>
      </PageContainer>
    );
  }

  if (error || !data || !data.allCategory) {
    return (
      <PageContainer>
        <ErrorMessage>Ocorreu um erro, tente novamente mais tarde!</ErrorMessage>
      </PageContainer>
    );
  }

  const { allCategory } = data;

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

  @media (max-width: 1023px) {
    width: 90vw;
  }
`;

const PageContainer = styled.div`
  min-height: 70vh;
`;

const PageLoading = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const CustomLoading = styled(Loading)`
  margin-top: 15vh;

  &:after {
    width: 10vw;
    height: 10vw;
    border: 6px solid #ffcc04;
    border-right-color: transparent;
    border-top-color: transparent;

    @media (max-width: 1023px) {
      width: 25vw;
      height: 25vw;
    }
  }
`;

const ErrorMessage = styled.h1`
  text-align: center;
  font-size: 4em;
  padding-top: 10vh;
`;

export default withCategories(Products);
