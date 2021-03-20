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
  width: 150px;
  height: 220px;
  display: flex;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
  border-radius: 5px;
  margin: 15px;
  flex-direction: column;
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
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.span`
  font-weight: bold;
`;

export default ProductCard;
