import React from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import DescriptionInput from '../Elements/LongInput';

const LongDescription = () => {
  return (
    <div>
      <GlobalQuestion>
        <DescriptionInput />
      </GlobalQuestion>
    </div>
  );
};
console.log('현재 제일 아래 컴포넌트 랜더링돼요');
export default LongDescription;
