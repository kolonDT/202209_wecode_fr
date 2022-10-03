import React, { forwardRef } from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';
import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { formListState } from '../../store/store';

const MultipleSingle = ({ sortIndex, label, question, option }) => {
  const [formList, setFormList] = useRecoilState(formListState);
  const { register, control } = useFormContext({
    defaultValues: {},
  }); // retrieve all hook methods

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: `formData[${sortIndex - 1}].option.0`, // unique name for your Field Array
    }
  );

  console.log('fields', fields);

  const addColorQuantity = e => {
    e.preventDefault();
    //여기서 에러
    append({ option: '' });
  };

  const subColorQuanaity = idx => e => {
    e.preventDefault();
    remove(idx);
  };
  // setFormList(prev => ({
  //   surveyName: '설문조사',
  //   formData: [
  //     ...prev.formData,
  //     {
  //       id: formNum + 1,
  //       type: idx,
  //       question: '',
  //       options: [],
  //     },
  //   ],
  // }));
  // {...register(`formData[${index}].option`)}
  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleSingle}
        register={register}
      >
        {fields.map((field, index) => (
          <Input
            key={field.id}
            // {...register(
            //   `formData[${sortIndex - 1}].option.0[${sortIndex - 1}]`
            // )}
          />
        ))}
        <Button onClick={addColorQuantity}>
          <MdOutlineAddCircleOutline />
        </Button>

        {/* <ChoicesContainer>
          {OPTIONS.map((list, idx) => (
            <Choice key={idx}>
              <CheckCircle />
              <MultipleContent
                placeholder={list}
                {...register(`formData[${sortIndex - 1}].option.0[${idx}]`)}
              />
              <Button name="add">
                <MdOutlineAddCircleOutline />
              </Button>
              <Button name="minus">
                <MdOutlineRemoveCircleOutline />
              </Button>
            </Choice>
          ))}
        </ChoicesContainer> */}
      </GlobalQuestion>
    </div>
  );
};

export default MultipleSingle;
const OPTIONS = ['BMW', 'ZEEP', '싱글'];
const Input = styled.input``;

const ButtonTest = styled.button``;

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
