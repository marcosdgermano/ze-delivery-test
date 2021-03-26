import React from 'react';
import styled from 'styled-components';

const Loading = () => <LoadingUI />;

const LoadingUI = styled.div`
  margin: 25px;
  display: flex;
  justify-content: center;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &:after {
    border-width: 4px;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    animation: rotate 500ms infinite linear;
    border-radius: 100%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: 60px;
    width: 60px;
  }
`;

export default Loading;
