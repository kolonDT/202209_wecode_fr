import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import GlobalQuestion from '../GlobalQuestion';

const PhoneInput = ({ sortIndex, question }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        question={question}
        type={QUESTION_ARRAY_TYPE.PhoneInput}
        register={register}
      >
        <Display>
          <Phone
            {...register('phone', {
              minLength: {
                value: 3,
                message: '최소 3자 이상의 번호를 입력하세요',
              },
              maxLength: {
                value: 13,
                message: '13자 이하만 입력 가능합니다',
              },
              pattern: {
                value: /[0-9]/g,
                message: '숫자만 입력해주세요',
              },
            })}
          />
        </Display>
      </GlobalQuestion>
    </div>
  );
};

const Phone = styled.textarea`
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 38px;
  width: 150px;
  /* resize: none;  */
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

const Display = styled.form`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')};
`;
export default PhoneInput;
