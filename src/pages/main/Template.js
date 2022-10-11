import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { API } from '../../config';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import * as S from './TemplateStyle';

const Template = ({ template }) => {
  const adminToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const { id, name, status, start_date, end_date, count, surveyLink } =
    template;

  const passed = status === '완료';

  const toDelete = async () => {
    if (adminToken) {
      try {
        const res = await axios.delete(`${API.MAIN}/editor/survey/${id}`, {
          headers: {
            Authorization: adminToken,
          },
        });
        const { message } = res.data;
        if (message === 'success') {
          alert('삭제 되었습니다');
          window.location.replace('/');
        } else {
          alert('삭제가 실패되었습니다');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  };

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
        <Link key={id} to={`/statistic/${id}`}>
          <S.ResultButton> 결과 </S.ResultButton>
        </Link>
        <S.EndButton disabled={passed} onClick={theEnd}>
          강제 종료
        </S.EndButton>
        <S.DeleteButton>
          <AiFillDelete onClick={toDelete} />
        </S.DeleteButton>
      </S.Buttons>
    </S.Layout>
  );
};

export default Template;
