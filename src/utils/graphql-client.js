import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.code-challenge.ze.delivery/public/graphql', fetch }),
  cache: new InMemoryCache(),
});
