import React from 'react';
import styled from 'styled-components';
import { formatMoney } from '../../utils/helpers';

const ProductCard = ({ image, price, name }) => (
  <Card>
    <Image src={image} />
    <Info>
      <Name>{name}</Name>
      <Price>{formatMoney(price)}</Price>
    </Info>
  </Card>
);

const Card = styled.div`
  min-width: 150px;
  height: 220px;
  display: flex;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
  border-radius: 5px;
  margin: 15px;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 1024px) {
    min-width: 250px;
    height: 420px;
  }
`;

const Info = styled.div`
  padding: 5 10px;
  border-top: 1px solid #ccc;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  height: 100px;
  margin: 10px auto;

  @media (max-width: 1024px) {
    height: 200px;
  }
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 1024px) {
    font-size: 2em;
  }
`;

const Price = styled.span`
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 2em;
  }
`;

export default ProductCard;
