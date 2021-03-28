import React from 'react';
import get from 'lodash/get';
import { useQuery } from '@apollo/client';
import { getProducts } from '../queries/products.graphql';
import { allCategoriesSearch } from '../queries/categories.graphql';
import { getCookie } from '../utils/helpers';

export const withCategories = Component => props => {
  const { data, error, loading } = useQuery(allCategoriesSearch);

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
  const products = get(data, ['poc', 'products'], []);

  return <Component products={products} error={error} loading={loading} {...props} />;
};
