import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from './utils/graphql-client';
import history from './utils/history';
import Home from './pages/home';
import Products from './pages/products';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Products} />
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));