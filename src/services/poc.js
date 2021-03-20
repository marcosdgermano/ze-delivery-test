import React from 'react';
import get from 'lodash/get';
import { useQuery } from '@apollo/client';
import { pocSearchMethod } from '../queries/poc.graphql';
import { getProducts } from '../queries/products.graphql';

export const withPoc = Component => props => {
  const {data: pocData, error: pocError, loading: pocLoading} = useQuery(pocSearchMethod);
  const {data, error, loading} = useQuery(getProducts, {
    variables: {
      id: get(pocData, ['pocSearch', '0', 'id'])
    }
  });


  return <Component data={data} error={pocError || error} loading={loading || pocLoading} {...props} />
}
