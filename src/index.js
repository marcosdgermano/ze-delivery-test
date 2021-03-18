import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, useQuery } from '@apollo/client';
import { client } from './graphql';
import { pocSearchMethod } from './queries/poc.graphql';

const Dummy = () => {
  const {data, error, loading} = useQuery(pocSearchMethod);

  if(error) {
    console.log('ERROR >>>>>>>>', error);
    return <h1>ERROR</h1>;
  }

  if(loading) {
    return <h1>LOADING</h1>;
  }

  if(data) {
    console.log(data);
    return <h1>HAS DATA</h1>;
  }

  return <h1>NOTHING</h1>;
};

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Dummy />
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));