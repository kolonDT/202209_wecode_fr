import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const DescriptionInput = ({ register, name }) => {
  return <Container {...register(name)} cols="60" rows="2" />;
};

export default DescriptionInput;

const Container = styled.textarea`
  margin: 20px 0 20px 100px;
  outline: none;
`;
