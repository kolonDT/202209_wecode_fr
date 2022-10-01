import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { forwardRef } from 'react';

const MultipleMultiple = ({ sortIndex, onChange, onBlur, name, label }) => {
  const { control, register } = useFormContext(); // retrieve all hook methods
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'test', // unique name for your Field Array
    }
  );

  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleMultiple}
        register={register}
        name="formData.0"
      >
        {/* {MULTI_LIST.map((question, idx) => (
          <MultiInput key={idx} question={question} />
        ))} */}
        {/* {fields.map((field, index) => (
          <input
            key={field.id} // important to include key with field's id
            {...register(`test.${index}.value`)}
          />
        ))} */}
      </GlobalQuestion>
    </div>
  );
};

export default MultipleMultiple;

const MULTI_LIST = ['BMW', 'ZEEP', 'HOPE'];
