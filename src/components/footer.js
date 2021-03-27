import React from 'react';
import styled from 'styled-components';
import LinkedinSVG from '../../public/assets/linkedin.svg';
import TwitterSVG from '../../public/assets/twitter.svg';

const Footer = () => (
  <Wrapper>
    <div>
      <Image src="/public/assets/my-pic.jpg" />
      <SocialWrapper>
        <a href="https://www.linkedin.com/in/marcos-domingos-germano-a72209ba/">
          <LinkedinSVG />
        </a>
        <a href="https://twitter.com/eaimarkindj">
          <TwitterSVG />
        </a>
      </SocialWrapper>
    </div>
    <Separator />
    <div>
      <Title>Sobre o Marcos Germano</Title>
      <Link target="blank" href="https://shorturl.at/hnqE3">
        Tenho 3 gatinho top
      </Link>
      <Link target="blank" href="https://shorturl.at/UZ137">
        Meu filme favorito
      </Link>
    </div>
  </Wrapper>
);

const Title = styled.h2`
  color: #fff;
  font-size: 1.2em;

  @media (max-width: 1023px) {
    font-size: 2.3em;
  }
`;

const Link = styled.a`
  color: #fff;
  display: block;
  line-height: 2em;

  @media (max-width: 1023px) {
    font-size: 2em;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Separator = styled.div`
  border-style: solid;
  border-color: red;
  border-width: 0px 1px 0px;
  margin: 0 30px;
  opacity: 0.4;
  height: 100%;
`;

const Image = styled.img`
  height: 60%;
  border-radius: 100%;
  padding: 10px 0;
`;

const Wrapper = styled.footer`
  width: 100%;
  height: 15%;
  padding: 30px 0;
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Footer;
