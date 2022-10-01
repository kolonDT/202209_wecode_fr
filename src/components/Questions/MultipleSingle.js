import React, { forwardRef } from 'react';
import GlobalQuestion from '../GlobalQuestion';
import MultiInput from '../Elements/MultiInput';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFieldArray, useFormContext } from 'react-hook-form';

const MultipleSingle = ({ sortIndex, label }) => {
  const { register } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      defaultValues: {
        surveyName: '목데이터 연습',
        formData: [
          {
            id: '',
            type: '',
            question: '',
            option: [''],
          },
        ],
      }, // unique name for your Field Array
    }
  );

  console.log(fields);

  return (
    <div>
      {fields.map((field, index) => (
        <input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        />
      ))}
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleSingle}
        register={register}
        name="formData"
      >
        <MultiInput />
      </GlobalQuestion>
    </div>
  );
};

export default MultipleSingle;
