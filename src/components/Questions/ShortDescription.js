import React from 'react';
import ShortInput from '../Elements/ShortInput';
import GlobalQuestion from '../GlobalQuestion';

const ShortDescription = () => {
  console.log('현재 제일 아래 컴포넌트 랜더링돼요');
  return (
    <div>
      <GlobalQuestion>
        <ShortInput />
      </GlobalQuestion>
    </div>
  );
};

export default ShortDescription;
