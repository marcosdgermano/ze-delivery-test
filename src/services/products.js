import React from 'react';
import { useQuery } from '@apollo/client';
import { getProducts } from '../queries/products.graphql';
import { getCookie } from '../utils/helpers';

export const withProducts = Component => props => {
  const pocId = getCookie('pocId');
  const { data, error, loading } = useQuery(getProducts, {
    variables: {
      id: pocId,
    },
  });

  return <Component data={data} error={error} loading={loading} {...props} />;
};
