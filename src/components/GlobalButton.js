import React from 'react';
import styled from 'styled-components';

const GlobalButton = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GlobalButton;

const Container = styled.button`
  margin-left: ${children => children.children === '...' || '10px'};
  padding: ${children =>
    children.children === '이전으로 가기' || '다음으로 가기' ? '5Px 10px' : 0};
  color: #ffffff;
  border-color: ${props => props.theme.style.mainBlue};
  background-color: ${props => props.theme.style.mainBlue};
  border-radius: 25px;
  width: ${title =>
    title.children === '이전으로 가기' || '다음으로 가기' ? 'auto' : '50px'};
  height: 50px;
  position: ${children => children.children === '...' && 'absolute'};
`;
