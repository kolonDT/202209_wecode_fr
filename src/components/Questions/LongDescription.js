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

export default LongDescription;
