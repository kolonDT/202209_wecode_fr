import React, { forwardRef } from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import DescriptionInput from '../Elements/LongInput';
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
        register={register}
        name="formData.0.question"
      >
        <DescriptionInput
          register={register}
          name="formData.0.questionAnswer"
        />
      </GlobalQuestion>
    </div>
  );
};

export default LongDescription;
