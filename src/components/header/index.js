import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const image =
    'https://courier-images-web.imgix.net/static/img/logo-white-text.png?auto=compress,format&fit=max&w=176&h=56&dpr=2&fm=png';

  return (
    <Wrapper>
      <Image height="100%" src={image} />
    </Wrapper>
  );
};

const Image = styled.img`
  height: 80%;
  padding: 10px;
`;

const Wrapper = styled.header`
  height: 7%;
  background-color: #333;
  display: flex;
  justify-content: center;
`;

export default Header;
