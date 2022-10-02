import { React, useEffect, useState } from 'react';
import { API } from '../../config';
import * as S from './UserSurveyStyle';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UserSurveyStyle = () => {
  const [form, setForm] = useState({}); // form 데이터 받는 State
  const [survey, setSurvey] = useState({}); // form 데이터 이외의 State
  const location = useLocation();
  const url = location.pathname;
  const id = url.substring(12);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`${API.MAIN}/surveypage/${id}`);
    const { result } = res.data;
    const { formData, etc } = result;
    setForm(formData);
    setSurvey(etc);
  };

  const { name, duplication_allow, anonymous_allow, startDate, endDate } =
    survey;

  return (
    <S.Background>
      <S.SurveyBox>
        <S.Title>
          참여도 조사
          {/* {name} */}
        </S.Title>
        <S.Period>
          참여 기간 : 2010.09.31-2014.09.32
          {/* {startDate}-{endDate} */}
        </S.Period>
        <S.Survey />
        {/* S.Survey는 서베이 형식 나오면 들어갈 자리 */}
      </S.SurveyBox>
    </S.Background>
  );
};

export default UserSurveyStyle;
