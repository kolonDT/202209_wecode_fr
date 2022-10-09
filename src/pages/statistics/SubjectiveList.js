import React from 'react';
import Subjective from './Subjective';
import * as S from './StatisticsStyle';
const SubjectiveList = ({ subjectives }) => {
  return (
    <S.SubjectiveListLayout>
      {subjectives.map(subjective => {
        return <Subjective key={subjective.id} subjective={subjective} />;
      })}
    </S.SubjectiveListLayout>
  );
};
export default SubjectiveList;
