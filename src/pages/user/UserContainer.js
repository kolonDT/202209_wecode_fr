import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EndingGreeting from '../../components/EndingGreeting';
import { API } from '../../config';
import UserSurvey from './UserSurvey';
import * as S from './UserSurveyStyle';

const UserContainer = () => {
  const [form, setForm] = useState({}); // form 데이터 받는 State
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
        {form?.formData?.length === 0 && <EndingGreeting />}
        <UserSurvey form={form} userId={id} setForm={setForm} />
      </S.SurveyForm>
    </S.Background>
  );
};

export default UserContainer;
