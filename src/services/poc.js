import React from 'react';
import { useLazyQuery } from '@apollo/client';
import get from 'lodash/get';
import { pocSearchMethod } from '../queries/poc.graphql';
import { getGeoLocation } from './location';
import { setCookie } from '../utils/helpers';

export const withPoc = Component => props => {
  const [fetchDistributor, { data, error, loading }] = useLazyQuery(pocSearchMethod);

  if (data && data.pocSearch.length > 0) {
    const pocId = get(data, ['pocSearch', '0', 'id']);
    setCookie('pocId', pocId);
    props.history.push('/produtos');
  }

  const getPoc = async address => {
    const location = await getGeoLocation(address);

    if (!location) {
      return null;
    }

    const { lat, lng: long } = location;

    fetchDistributor({
      variables: {
        algorithm: 'NEAREST',
        lat,
        long,
        now: Date.now,
      },
    });
  };

  return <Component getPoc={getPoc} data={data} error={error} loading={loading} {...props} />;
};

export default withPoc;
