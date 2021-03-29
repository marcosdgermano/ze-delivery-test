import React from 'react';
import styled from 'styled-components';
import withPoc from '../../services/poc';
import AddressField from './components/address-field';
import Loading from '../../components/loading';

export const Home = ({ getPoc, loading, error, pocId, history, noResult }) => {
  if (pocId) {
    history.push('/produtos', { pocId });
  }

  return (
    <Page>
      <FieldContainer>
        <AddressField onSubmit={getPoc} />
        {loading && <Loading />}
        {error && <span>Ocorreu um erro, tente novamente mais tarde!</span>}
        {noResult && <span>Nenhum distribuidor para este endereço</span>}
      </FieldContainer>
    </Page>
  );
};

const FieldContainer = styled.div`
  padding-top: 300px;
  margin: 0 auto;
  min-width: 350px;
  max-width: 700px;

  @media (min-width: 1024px) {
    width: 35vw;
  }
`;

const Page = styled.div`
  min-height: 75vh;
`;

export default withPoc(Home);
