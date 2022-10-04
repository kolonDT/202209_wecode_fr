import React from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';
import UserQuestion from '../UserQuestion';

const LongDes = ({ sortIndex, question }) => {
  // const { register } = useFormContext();

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.longDescription}
        name="formData.0.question"
        question={question}
      >
        <LongInput cols="60" rows="2" value="답변을 적어주세요" />
      </UserQuestion>
    </div>
  );
};

export default LongDes;

const LongInput = styled.p`
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 94px;
  width: 70%;
  resize: none;
  padding: 4px 9px;
  margin: 30px 0 10px 10px;
  outline: none;
  color: rgba(0, 41, 130, 0.7);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
`;
