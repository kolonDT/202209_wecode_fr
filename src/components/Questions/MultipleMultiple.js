import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import MultiInput from '../Elements/MultiInput';

const MultipleMultiple = () => {
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

export default MultipleMultiple;
