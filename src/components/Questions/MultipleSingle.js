import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import MultiInput from '../Elements/MultiInput';

const MultipleSingle = () => {
  return (
    <div>
      <GlobalQuestion>
        <MultiInput />
      </GlobalQuestion>
    </div>
  );
};
console.log('현재 제일 아래 컴포넌트 랜더링돼요');

export default MultipleSingle;
