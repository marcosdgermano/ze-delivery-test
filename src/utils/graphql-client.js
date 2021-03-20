const { ApolloClient, HttpLink, InMemoryCache } = require('@apollo/client');
const fetch = require('cross-fetch');

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.code-challenge.ze.delivery/public/graphql', fetch }),
  cache: new InMemoryCache(),
});
