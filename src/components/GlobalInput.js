import React from 'react';
import styled from 'styled-components';

const GlobalInput = () => {
  return <QuestionContent placeholder="제목 입력" />;
};

export default GlobalInput;

const QuestionContent = styled.input`
  padding-left: 15px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: none;
  outline: none;
`;
