import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { forwardRef } from 'react';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import styled, { css } from 'styled-components';

const MultipleMultiple = ({ sortIndex, onChange, onBlur, name, label }) => {
  const { control, register } = useFormContext(); // retrieve all hook methods
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'test', // unique name for your Field Array
    }
  );
  const methods = useFormContext(); // retrieve all hook methods
  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleMultiple}
        register={register}
        name="formData.0"
      >
        {/* {MULTI_LIST.map((question, idx) => (
          <MultiInput key={idx} question={question} />
        ))} */}
        {/* {fields.map((field, index) => (
          <input
            key={field.id} // important to include key with field's id
            {...register(`test.${index}.value`)}
          />
        ))} */}

        <ChoicesContainer>
          {MULTI_LISTS.map((list, idx) => (
            <Choice key={idx}>
              <CheckCircle />
              <MultipleContent placeholder="항목 입력" />
              <IconRight>
                <MdOutlineRemoveCircleOutline />
              </IconRight>
            </Choice>
          ))}
        </ChoicesContainer>
      </GlobalQuestion>
    </div>
  );
};

export default MultipleMultiple;

const MULTI_LISTS = ['BMW', 'ZEEP', 'HOPE'];

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
