import React from 'react';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import ShortInput from '../Elements/ShortInput';
import GlobalQuestion from '../GlobalQuestion';

const ShortDescription = ({ sortIndex }) => {
  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
      >
        <ShortInput />
      </GlobalQuestion>
    </div>
  );
};

export default ShortDescription;
