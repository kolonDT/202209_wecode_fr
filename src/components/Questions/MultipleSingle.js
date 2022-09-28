import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import MultiInput from '../Elements/MultiInput';

const MultipleSingle = () => {
  return (
    <div>
      <GlobalQuestion>
        <MultiInput />
        <MultiInput />
        <MultiInput />
        <MultiInput />
      </GlobalQuestion>
    </div>
  );
};

export default MultipleSingle;
