import React from 'react';
import * as S from './TemplateStyle';

const Template = ({ template }) => {
  const { name, status, start_date, end_date, count } = template;

  return (
    <S.Layout>
      <S.TitleAndStateAndPeriod>
        <S.Title>{name}</S.Title>
        <S.StateAndPeriod>
          <S.State> {status}</S.State>
          <S.Period>
            {' '}
            참여 기간 : {start_date} - {end_date}
          </S.Period>
        </S.StateAndPeriod>
      </S.TitleAndStateAndPeriod>
      <S.Buttons>
        <S.Participant> {count}명 </S.Participant>
        <S.ResultButton> 결과 </S.ResultButton>
        <S.ModifyButton> 수정 </S.ModifyButton>
      </S.Buttons>
    </S.Layout>
  );
};

export default Template;
