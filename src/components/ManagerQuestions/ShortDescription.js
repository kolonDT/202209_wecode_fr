import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import GlobalQuestion from '../GlobalQuestion';

const ShortDescription = ({ sortIndex }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
        name="formData."
        register={register}
      >
        <ShortInput cols="30" rows="2" disabled value="답변을 적어주세요" />
      </GlobalQuestion>
    </div>
  );
};

export default ShortDescription;

const ShortInput = styled.textarea`
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 38px;
  width: 100%;
  resize: none;
  padding: 4px 9px;
  width: 360px;
  margin: 20px 0 20px 100px;
  outline: none;
  color: rgba(0, 41, 130, 0.33);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
