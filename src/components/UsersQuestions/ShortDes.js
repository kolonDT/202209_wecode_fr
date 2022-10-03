import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import UserQuestion from '../UserQuestion';

const ShortDes = ({ sortIndex, question }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
        name="formData."
        register={register}
        question={question}
      >
        <ShortInput cols="20" rows="1" value="답변을 적어주세요" />
      </UserQuestion>
    </div>
  );
};

export default ShortDes;

const ShortInput = styled.textarea`
  display: flex;
  justify-content: start;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  width: 50%;
  resize: none;
  padding: 4px 9px;
  margin: 30px 0 10px 110px;
  outline: none;
  color: rgba(0, 41, 130, 0.7);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
`;
