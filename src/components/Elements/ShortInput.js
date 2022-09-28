import React from 'react';
import styled from 'styled-components';

const ShortInput = () => {
  return <ShortContainer cols="30" rows="2" required />;
};

export default ShortInput;

const ShortContainer = styled.textarea`
  margin: 20px 0 20px 100px;
  outline: none;
`;
