import React from 'react';
import styled from 'styled-components';

const DescriptionInput = () => {
  return <Container cols="60" rows="5" />;
};

export default DescriptionInput;

const Container = styled.textarea`
  margin: 20px 0 20px 100px;
  outline: none;
`;
