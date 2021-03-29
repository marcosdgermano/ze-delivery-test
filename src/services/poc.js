import React from 'react';
import { useLazyQuery } from '@apollo/client';
import get from 'lodash/get';
import { pocSearchMethod } from '../queries/poc.graphql';
import { getGeoLocation } from './location';

export const withPoc = Component => props => {
  const [fetchDistributor, { data, error, loading }] = useLazyQuery(pocSearchMethod);
  const pocId = get(data, ['pocSearch', '0', 'id'], '');
  const noResult = data && data.pocSearch.length < 1;

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

  return <Component getPoc={getPoc} pocId={pocId} noResult={noResult} no error={error} loading={loading} {...props} />;
};

export default withPoc;
