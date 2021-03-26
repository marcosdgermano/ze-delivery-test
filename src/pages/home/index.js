import React from 'react';
import styled from 'styled-components';
import withPoc from '../../services/poc';
import AddressField from './address-field';
import Loading from '../../components/loading';

const Home = ({ getPoc, loading, error }) => (
  <Page>
    <FieldContainer>
      <AddressField onSubmit={getPoc} />
      {loading && <Loading />}
      {error && <span>error</span>}
    </FieldContainer>
  </Page>
);

const FieldContainer = styled.div`
  padding-top: 300px;
  margin: 0 auto;
  width: 35vw;
  min-width: 350px;
  max-width: 700px;
`;

const Page = styled.div`
  min-height: 75vh;
`;

export default withPoc(Home);
