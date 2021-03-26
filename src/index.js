import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from './utils/graphql-client';
import GlobalStyle from './utils/global-style';
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Products from './pages/products';

const Page = styled.div`
  min-height: 70vh;
`;

const App = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyle />
    <Router history={history}>
      <Header />
      <Page>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produtos" component={Products} />
        </Switch>
      </Page>
      <Footer />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
