import React, { forwardRef } from 'react';
import GlobalQuestion from '../GlobalQuestion';

import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { formListState } from '../../store/store';

const MultipleSingle = ({ sortIndex, label }) => {
  const { register } = useFormContext(); // retrieve all hook methods
  const [formList, setFormList] = useRecoilState(formListState);

  // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
  //   {
  //     defaultValues: {
  //       surveyName: '목데이터 연습',
  //       formData: [
  //         {
  //           id: '',
  //           type: '',
  //           question: '',
  //           options: [],
  //         },
  //       ],
  //     }, // unique name for your Field Array
  //   }
  // );

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
  return (
    <div>
      {/* {fields.map((field, index) => (
        <input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        />
      ))} */}
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleSingle}
        name="formData.id"
      >
        <ChoicesContainer>
          {OPTIONS.map((list, idx) => (
            <Choice key={idx}>
              <CheckCircle />
              <MultipleContent placeholder={list} />
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

export default MultipleSingle;
const OPTIONS = ['BMW', 'ZEEP', 'HOPE'];

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
