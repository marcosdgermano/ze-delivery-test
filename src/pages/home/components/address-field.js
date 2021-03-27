import React, { useState } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';

export const AddressField = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onClick = () => {
    onSubmit(value);
  };

  const handleChange = e => {
    const value = get(e, ['target', 'value'], '');

    setValue(value);
  };

  return (
    <Flexbox>
      <Cell>
        <TextInput name="cep" placeholder="digite o CEP" onChange={handleChange} value={value} />
      </Cell>
      <Cell auto>
        <Button onClick={onClick}>ok</Button>
      </Cell>
    </Flexbox>
  );
};

const TextInput = styled.input`
  border-radius: 4px;
  border-width: 1px;
  border: 1px solid #acacab;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  &::placeholder {
    color: #dadada;
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 1023px) {
    padding: 25px;
    font-size: 40px;
  }
`;

const Flexbox = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Cell = styled.div`
  display: flex;
  flex: ${({ auto }) => (auto ? '1 1 0px' : 'auto')};
  width: 100%;
`;

const Button = styled.button`
  min-width: 50px;
  cursor: pointer;
  border: 2px solid #e61213;
  border-radius: 3px;
  background: #fff;
  color: #e61213;
  margin-left: 10px;
  height: 100%;
  font-size: 16px;

  :focus {
    outline-color: #e61213;
  }

  @media (max-width: 1023px) {
    width: 100px;
    font-size: 40px;
  }
`;

export default AddressField;
