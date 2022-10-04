import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';

import styled, { css } from 'styled-components';
import UserQuestion from '../UserQuestion';

const MultipleM = ({ sortIndex, question, option }) => {
  // const { register } = useFormContext();
  console.log(option);
  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleMultiple}
        question={question}
      >
        <ChoicesContainer>
          {option.map((list, idx) => (
            <Choice key={idx}>
              <CheckCircle />
              <MultipleContent value={list} />
            </Choice>
          ))}
        </ChoicesContainer>
      </UserQuestion>
    </div>
  );
};

export default MultipleM;

const MULTI_LISTS = ['BMW', 'ZEEP', 'HOPE'];

const ChoicesContainer = styled.ul`
  margin-left: 50px;
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
  display: flex;
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
const Button = styled.span`
  position: absolute;
  top: 18px;
  right: ${props => (props.name === 'minus' ? '70px' : '100px')};
  font-size: 20px;
  margin-left: 1000px;

  &:hover {
    color: ${props => (props.name === 'add' ? 'green' : 'red')};
  }
`;
