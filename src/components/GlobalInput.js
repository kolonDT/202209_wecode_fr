import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const GlobalInput = () => {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <QuestionContent placeholder="항목 입력" {...register('globalInput')} />
  );
};

export default GlobalInput;

const QuestionContent = styled.input`
  padding-left: 15px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: none;
  outline: none;
`;
