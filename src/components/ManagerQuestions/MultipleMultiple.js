import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';

import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';
import styled, { css } from 'styled-components';

const MultipleMultiple = ({
  sortIndex,
  onRemove,
  onChange,
  onBlur,
  name,
  label,
  formId,
}) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleMultiple}
        register={register}
        onRemove={onRemove}
        formId={formId}
      >
        <ChoicesContainer>
          {MULTI_LISTS.map((list, idx) => (
            <Choice key={idx}>
              <CheckSquare />
              <MultipleContent
                placeholder="항목 입력"
                {...register(`formData[${sortIndex - 1}].option.0[${idx}]`)}
              />
              {/* <Button name="add">
                <MdOutlineAddCircleOutline />
              </Button>
              <Button name="minus">
                <MdOutlineRemoveCircleOutline />
              </Button> */}
            </Choice>
          ))}
        </ChoicesContainer>
      </GlobalQuestion>
    </div>
  );
};

export default MultipleMultiple;

const MULTI_LISTS = ['1번', '2번', '3번', '4번'];

const ChoicesContainer = styled.ul`
  margin-left: 50px;
  margin-right: 50px;
`;
const CheckSquare = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
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
