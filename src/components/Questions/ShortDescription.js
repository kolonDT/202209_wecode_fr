import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import GlobalQuestion from '../GlobalQuestion';

const ShortDescription = ({ sortIndex, onChange, onBlur, name, label }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
        name="formData."
      >
        <ShortInput cols="30" rows="2" />;
      </GlobalQuestion>
    </div>
  );
};

export default ShortDescription;

const ShortInput = styled.textarea`
  margin: 20px 0 20px 100px;
  outline: none;
`;
