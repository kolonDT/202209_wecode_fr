import React from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../config';
import * as S from './TemplateStyle';
import { Link } from 'react-router-dom';

const Template = ({ template }) => {
  const adminToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const { id, name, status, start_date, end_date, count, surveyLink } =
    template;
  const passed = status === '완료';
  const theEnd = () => {
    fetch(`${API.MAIN}/main/list/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: adminToken,
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'udpate success') {
          alert('설문이 종료되었습니다');
          window.location.replace('/');
        } else {
          alert('로그인이 필요합니다');
          navigate('/admin/login');
        }
      });
  };

  return (
    <S.Layout disabled={passed}>
      <S.TitleAndStateAndPeriod>
        <Link
          key={id}
          to={`/link/${id}`}
          state={{ surveyLink: surveyLink, name: name }}
        >
          <S.Title>{name}</S.Title>
        </Link>
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
        <Link key={id} to={`/statistic/${id}`}>
          <S.ResultButton> 결과 </S.ResultButton>
        </Link>
        <S.DeleteButton disabled={passed} onClick={theEnd}>
          강제 종료
        </S.DeleteButton>
      </S.Buttons>
    </S.Layout>
  );
};

export default Template;
