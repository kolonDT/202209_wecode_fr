import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';
import UserQuestion from '../UserQuestion';
import EssentialBox from '../EssentialBox';
import { ErrorMessage } from '@hookform/error-message';

const PrivacyConsent = ({ sortIndex, question, consent, onRemove }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const commentRef = useRef(null);
  const { ref, ...rest } = register(`userData[${sortIndex - 1}].agreement`);

  const handleResizeHeight = useCallback(() => {
    if (!commentRef.current) return;
    commentRef.current.style.height = 'auto';
    commentRef.current.style.height = commentRef.current?.scrollHeight + 'px';
  }, [commentRef]);
  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.privacyConsent}
        question={question}
      >
        <Display>
          <Content>{consent}</Content>
          <CheckboxDisplay>
            <CheckText>개인정보 수집 및 이용에 동의합니다.</CheckText>
            <ForCheck
              type="checkbox"
              {...register(`userData[${sortIndex - 1}].agreement`, {
                required: {
                  value: '동의',
                  message: `개인 정보 필수 입니다.!`,
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name={`userData[${sortIndex - 1}].agreement`}
              render={({ message }) => <EssentialBox>{message}</EssentialBox>}
            />
          </CheckboxDisplay>
        </Display>
      </UserQuestion>
    </div>
  );
};

export default PrivacyConsent;

const Content = styled.p`
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: auto;
  width: 70%;
  resize: none;
  padding: 4px 9px;
  margin: 20px 0 20px 100px;
  color: rgba(0, 41, 130, 0.8);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
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
