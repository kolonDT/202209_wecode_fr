import React from 'react';

import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import ShortInput from '../Elements/ShortInput';
import GlobalQuestion from '../GlobalQuestion';

const ShortDescription = ({ sortIndex, onChange, onBlur, name, label }) => {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
        register={register}
        name="formData.0"
      >
        <ShortInput />
      </GlobalQuestion>
    </div>
  );
};

export default ShortDescription;
