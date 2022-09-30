import React from 'react';
import styled from 'styled-components';
import GlobalQuestion from '../GlobalQuestion';
import DescriptionInput from '../Elements/LongInput';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';

const LongDescription = ({ sortIndex }) => {
  return (
    <div>
      <GlobalQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.longDescription}
      >
        <DescriptionInput />
      </GlobalQuestion>
    </div>
  );
};
export default LongDescription;
