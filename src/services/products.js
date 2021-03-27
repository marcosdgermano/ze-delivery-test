import React from 'react';
import { useQuery } from '@apollo/client';
import { getProducts } from '../queries/products.graphql';
import { allCategoriesSearch } from '../queries/categories.graphql';
import { getCookie } from '../utils/helpers';

export const withCategories = Component => props => {
  const { data, error, loading } = useQuery(allCategoriesSearch);
  console.log('error >>>>>', error);

  return <Component data={data} error={error} loading={loading} {...props} />;
};

export const withProducts = Component => props => {
  const pocId = getCookie('pocId');
  const { categoryId } = props;
  const { data, error, loading } = useQuery(getProducts, {
    variables: {
      id: pocId,
      categoryId,
    },
  });

  return <Component data={data} error={error} loading={loading} {...props} />;
};
