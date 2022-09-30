import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import MultiInput from '../Elements/MultiInput';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';

const MultipleSingle = ({ sortIndex }) => {
  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleSingle}
      >
        <MultiInput />
        <MultiInput />
        <MultiInput />
        <MultiInput />
      </GlobalQuestion>
    </div>
  );
};
console.log('현재 제일 아래 컴포넌트 랜더링돼요');

export default MultipleSingle;
