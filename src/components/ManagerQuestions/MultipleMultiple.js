import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import styled, { css } from 'styled-components';

const MultipleMultiple = ({ sortIndex, onRemove, formId }) => {
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
                placeholder={list}
                {...register(`formData[${sortIndex - 1}].option.0[${idx}]`)}
              />
            </Choice>
          ))}
        </ChoicesContainer>
      </GlobalQuestion>
    </div>
  );
};

export default MultipleMultiple;
const MULTI_LISTS = [
  '이곳에 내용을 입력하세요',
  '이곳에 내용을 입력하세요',
  '이곳에 내용을 입력하세요',
  '이곳에 내용을 입력하세요',
];

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
  padding-left: 5px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: 0.3px solid grey;
  outline: none;
  font-size: 13px;
  line-height: 23px;
  margin-left: 20px;
  margin-bottom: 6px;
  word-break: break-all;
  word-break: break-word;
  word-wrap: break-word;
`;

const Choice = styled.li`
  position: relative;
  padding: 15px 10px 4px 34px;
  border: 1px solid transparent;
  margin-top: 3px;
  line-height: 28px;
`;
