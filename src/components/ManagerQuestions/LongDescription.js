import React from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';

const LongDescription = ({ sortIndex, question }) => {
  const { register, errors } = useFormContext(); // retrieve all hook methods
  // const validateQuestion = value => {
  //   if (value.length < 2) {
  //     return '질문을 입력해주세요';
  //   }
  //   return true;

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.longDescription}
        name="formData.0.question"
        question={question}
        register={register}
        // onRemove={onRemove}
        errors={errors}

        // ref={register({
        //   required: '질문은 필ㅇㅇ수값입니다.',
        //   validate: validateQuestion,
        //   message: '질문은 필수값입니다',
        // })}
      >
        {/* {errors[formData.0.question].value === 'required' && (
          <p className="errorMsg">Email is required.</p>
        )} */}
        <LongInput cols="60" rows="2" disabled value="답변을 적어주세요" />
      </GlobalQuestion>
    </div>
  );
};

export default LongDescription;

const LongInput = styled.textarea`
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 94px;
  width: 70%;
  resize: none;
  padding: 4px 9px;
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
