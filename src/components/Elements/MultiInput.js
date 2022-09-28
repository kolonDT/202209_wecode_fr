import React from 'react';
import GlobalInput from '../GlobalInput';
import styled from 'styled-components';

const MultiInput = () => {
  return (
    <ChoicesContainer>
      <Choice>
        <Icon>
          <i className="uil uil-check-circle" />
        </Icon>
        <GlobalInput />
        <IconRight>
          <i className="uil uil-plus-circle" />
        </IconRight>
      </Choice>
    </ChoicesContainer>
  );
};

export default MultiInput;

const ChoicesContainer = styled.ul`
  margin-left: 50px;
  margin-right: 50px;
`;
const Choice = styled.li`
  position: relative;
  padding: 15px 10px 4px 34px;
  border: 1px solid transparent;
  margin-top: 3px;
  line-height: 28px;
`;

const Icon = styled.span`
  font-size: 20px;

  &:hover {
    color: green;
  }
`;

const IconRight = styled.span`
  font-size: 20px;
  margin-left: 100px;

  &:hover {
    color: green;
  }
`;
