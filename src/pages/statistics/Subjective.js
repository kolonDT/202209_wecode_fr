import React from 'react';
import SubjectiveAnswer from './SubjectiveAnswer';
import * as S from './StatisticsStyle';

const Subject = ({ subjective }) => {
  const { id, question, answers } = subjective;
  return (
    <S.SubjectiveLayout>
      <S.Num>
        <S.Id>{id}</S.Id>
        {question}
      </S.Num>
      <S.Answers>
        {answers.map(answer => {
          return <SubjectiveAnswer key={answer.id} answer={answer} />;
        })}
      </S.Answers>
    </S.SubjectiveLayout>
  );
};

export default Subject;
