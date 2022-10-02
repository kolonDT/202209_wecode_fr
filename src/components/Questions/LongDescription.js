import React, { forwardRef } from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';
import { formListState } from '../../store/store';
import { useRecoilValue } from 'recoil';

const LongDescription = ({ sortIndex, onChange, onBlur, name, label }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.longDescription}
        name="formData.0.question"
      >
        <LongInput cols="60" rows="2" />;
      </GlobalQuestion>
    </div>
  );
};

export default LongDescription;

const LongInput = styled.textarea`
  margin: 20px 0 20px 100px;
  outline: none;
`;
