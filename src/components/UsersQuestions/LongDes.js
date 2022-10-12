import React from 'react';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';
import UserQuestion from '../UserQuestion';
import EssentialBox from '../EssentialBox';
import { ErrorMessage } from '@hookform/error-message';

const LongDes = ({ sortIndex, question }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.longDescription}
        question={question}
      >
        <LongInput
          cols="60"
          rows="2"
          {...register(`userData[${sortIndex - 1}].answers`, {
            required: {
              value: '긴 답변',
              message: `필수 항목입니다`,
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name={`userData[${sortIndex - 1}].answers`}
          render={({ message }) => <EssentialBox>{message}</EssentialBox>}
        />
      </UserQuestion>
    </div>
  );
};

export default LongDes;

const LongInput = styled.input`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
  padding: 4px 9px;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 94px;
  width: 70%;
  resize: none;
  color: rgba(0, 41, 130, 0.8);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
`;
