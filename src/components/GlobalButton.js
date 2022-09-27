import React from 'react';
import styled from 'styled-components';

const GlobalButton = ({ title }) => {
  return <Container>{title}</Container>;
};

export default GlobalButton;

const Container = styled.button`
  margin-left: ${title => title.children === '...' || '10px'};
  padding: ${title =>
    title.children === '이전으로 가기' || '다음으로 가기' ? '5Px 10px' : 0};
  color: #ffffff;
  border-color: ${props => props.theme.style.mainBlue};
  background-color: ${props => props.theme.style.mainBlue};
  border-radius: 25px;
  width: ${title =>
    title.children === '이전으로 가기' || '다음으로 가기' ? 'auto' : '50px'};
  height: 50px;
  position: ${title => title.children === '...' && 'absolute'};
`;
