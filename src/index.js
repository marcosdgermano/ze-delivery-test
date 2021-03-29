import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from './utils/graphql-client';
import GlobalStyle from './utils/global-style';
import history from './utils/history';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Products from './pages/products';
import { getCookie, setCookie } from './utils/helpers';

const Page = styled.div`
  min-height: 70vh;
`;

const hasPocId = history => {
  if (history.location.state?.pocId) {
    setCookie('pocId', history.location.state?.pocId);
    history.replace();
    return true;
  }

  return !!getCookie('pocId');
};

const App = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyle />
    <Router history={history}>
      <Header />
      <Page>
        <Switch>
          <Route
            path="/"
            exact
            render={({ history }) => (hasPocId(history) ? <Redirect to="/produtos" /> : <Home history={history} />)}
          />
          <Route
            path="/produtos"
            exact
            render={({ history }) => (!hasPocId(history) ? <Redirect to="/" /> : <Products history={history} />)}
          />
        </Switch>
      </Page>
      <Footer />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
