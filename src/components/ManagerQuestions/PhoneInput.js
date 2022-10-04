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
        type={QUESTION_ARRAY_TYPE.phoneInput}
        register={register}
      >
        <Display>
          <Phone name="phone" disabled value="ex)01068202190" />
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
  width: 170px;
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

const Display = styled.div`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')};
`;
export default PhoneInput;
