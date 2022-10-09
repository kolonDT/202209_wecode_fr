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

  // status 완료시 강제 종료 버튼 비활성화, templateStyle - Layout 색상 변경 (theEndTemplate로 넘겨줌)
  const passed = status === '완료';

  // 템플릿 강제 종료 버튼 함수
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
    <S.Layout theEndTemplate={passed}>
      <S.TitleAndStateAndPeriod>
        {/* 메인에서 받은 name, surveyLink 를 Link 페이지로 넘겨줌 */}
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
            참여 기간 : {start_date} - {end_date}
          </S.Period>
        </S.StateAndPeriod>
      </S.TitleAndStateAndPeriod>
      <S.Buttons>
        <S.Participant> {count}명 </S.Participant>
        {/* 통계 페이지 이동  */}
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
