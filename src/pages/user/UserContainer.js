import { React, useEffect, useState } from 'react';
import { API } from '../../config';
import { useLocation } from 'react-router-dom';
import UserSurvey from './UserSurvey';
import * as S from './UserSurveyStyle';

const UserContainer = () => {
  const [form, setForm] = useState({}); // form 데이터 받는 State
  const [survey, setSurvey] = useState({}); // form 데이터 이외의 State
  const location = useLocation();
  const url = location.pathname;
  const id = url.substring(12);

  useEffect(() => {
    fetch(`${API.SURVEYPAGE}/${id}`, {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => setForm(result));
  }, [id]);

  return (
    <S.Background>
      <S.SurveyForm>
        <S.Title>{form?.etc?.name}</S.Title>
        <S.Period>
          참여 기간 :{form?.etc?.startDate.substring(0, 10)} ~
          {form?.etc?.endDate.substring(0, 10)}
        </S.Period>
        <UserSurvey
          form={form}
          userId={id}
          survey={survey}
          setSurvey={setSurvey}
        />
      </S.SurveyForm>
    </S.Background>
  );
};

export default UserContainer;
