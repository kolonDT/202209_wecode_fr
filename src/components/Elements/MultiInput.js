import React from 'react';
import styled, { css } from 'styled-components';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';

const MultiInput = () => {
  return (
    <ChoicesContainer>
      <Choice>
        <CheckCircle />
        <MultipleContent placeholder="항목 입력" />
        <IconRight>
          <MdOutlineRemoveCircleOutline />
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
const CheckCircle = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  border: 1px solid #ced4da;

  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const MultipleContent = styled.input`
  padding-left: 15px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: none;
  outline: none;
`;

const Choice = styled.li`
  position: relative;
  padding: 15px 10px 4px 34px;
  border: 1px solid transparent;
  margin-top: 3px;
  line-height: 28px;
`;
const IconRight = styled.span`
  position: absolute;
  top: 18px;
  right: 100px;
  font-size: 20px;
  margin-left: 100px;

  &:hover {
    color: green;
  }
`;
