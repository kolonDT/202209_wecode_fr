import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';

const PrivacyConsent = ({ sortIndex, question, onRemove, formId }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  const commentRef = useRef(null);

  const { ref, ...rest } = register(`formData[${sortIndex - 1}].consent`);

  const handleResizeHeight = useCallback(() => {
    if (!commentRef.current) return;
    commentRef.current.style.height = 'auto';
    commentRef.current.style.height = commentRef.current?.scrollHeight + 'px';
  }, [commentRef]);

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.privacyConsent}
        question={question}
        register={register}
        onRemove={onRemove}
        formId={formId}
      >
        <Display>
          <LongInput
            rows="3"
            {...rest}
            {...register(`formData[${sortIndex - 1}].consent`)}
            onInput={handleResizeHeight}
            ref={e => {
              ref(e);
              commentRef.current = e;
            }}
            defaultValue="코오롱글로벌(주)의 자동차 매매상담 이벤트를 위하여 아래와 같이 개인정보를 수집 및 이용하고자 합니다. 개인정보의 수집 및 이용 동의를 거부할 권리가 있으며, 이 경우 이벤트 참여가 제한됩니다. 
            ■  수집항목 : 이름,  연락처■  수집목적 : 차랑 매매 상담 및 경품 배송■  보유기간 : 이벤트 종료 후 30일 이내 파기"
          />
          <CheckboxDisplay>
            <CheckText> 개인정보 수집 및 이용에 동의합니다.</CheckText>
            <ForCheck type="checkbox" disabled />
          </CheckboxDisplay>
        </Display>
      </GlobalQuestion>
    </div>
  );
};

export default PrivacyConsent;

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
