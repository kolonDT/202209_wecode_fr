import React from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';

const PrivacyConsent = ({ sortIndex, question }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.PrivacyConsent}
        question={question}
        register={register}
      >
        <Display>
          <input hidden="hidden" />
          <LongInput type="text" defalutvalue="답변을 적어주세요" />
          <CheckboxDisplay>
            <CheckText> 개인 정보 동의 여부 체크 확인 </CheckText>
            <ForCheck type="checkbox" />
          </CheckboxDisplay>
        </Display>
      </GlobalQuestion>
    </div>
  );
};

export default PrivacyConsent;

const LongInput = styled.input`
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

const ForCheck = styled.input`
  width: 20px;
  height: 20px;
`;

const CheckboxDisplay = styled.div`
  ${props => props.theme.variables.flex()};
`;

const CheckText = styled.div`
  font-size: 17px;
  margin-right: 5px;
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
