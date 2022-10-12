import React from 'react';
import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import EssentialBox from '../EssentialBox';
import UserQuestion from '../UserQuestion';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

const ShortDes = ({ sortIndex, question }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
        name="formData."
        question={question}
      >
        <ShortInput
          cols="20"
          rows="1"
          {...register(`userData[${sortIndex - 1}].answer`, {
            required: {
              value: '짧은 답변',
              message: `필수 항목 입니다.`,
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name={`userData[${sortIndex - 1}].answer`}
          render={({ message }) => <EssentialBox>{message}</EssentialBox>}
        />
      </UserQuestion>
    </div>
  );
};

export default ShortDes;

const ShortInput = styled.input`
  display: flex;
  margin-left: 50px;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  width: 50%;
  resize: none;
  padding: 4px 9px;
  margin-top: 20px;
  outline: none;
  color: rgba(0, 41, 130, 0.8);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
`;
