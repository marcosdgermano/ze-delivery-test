import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { formatMoney } from '../../../utils/helpers';
import { updateCart } from '../../../services/cart';

const ProductCard = ({ image, price, name, id, isSelected }) => {
  const [inCart, setInCart] = useState(isSelected);
  const buttonText = inCart ? 'Adicionado' : 'Adicionar';

  const onClick = () => {
    updateCart(id);
    setInCart(!inCart);
  };

  return (
    <Card>
      <Image src={image} />
      <Info>
        <Name>{name}</Name>
        <Price>{formatMoney(price)}</Price>
        <AddButton selected={inCart} onClick={onClick}>
          {buttonText}
        </AddButton>
      </Info>
    </Card>
  );
};

const AddButton = styled.button`
  cursor: pointer;
  border: 2px solid #e61213;
  border-radius: 3px;
  background: #fff;
  color: #e61213;
  font-size: 16px;
  :focus {
    outline-color: #e61213;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      background: #e61213;
    `}

  @media (max-width: 1023px) {
    font-size: 30px;
    height: 20%;
  }
`;

const Card = styled.div`
  min-width: 150px;
  height: 220px;
  display: flex;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
  border-radius: 5px;
  margin: 15px;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 1023px) {
    min-width: 300px;
    height: 500px;
  }
`;

const Info = styled.div`
  padding: 5 10px;
  border-top: 1px solid #ccc;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1023px) {
    padding: 5px 15px;
  }
`;

const Image = styled.img`
  height: 100px;
  margin: 10px auto;

  @media (max-width: 1023px) {
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

  @media (max-width: 1023px) {
    font-size: 2em;
  }
`;

const Price = styled.span`
  font-weight: bold;

  @media (max-width: 1023px) {
    font-size: 2em;
  }
`;

export default ProductCard;
