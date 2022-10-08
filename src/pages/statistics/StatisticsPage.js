import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import MulitpleList from './MultipleList';
import SubjectiveList from './SubjectiveList';
import PhoneList from './PhoneList';
import axios from 'axios';
import { API } from '../../config';

import * as S from './StatisticsStyle';

const StatisticsPage = () => {
  const location = useLocation();
  const url = location.pathname;
  const id = url.substring(11);
  const adminToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [multiple, setMultiple] = useState();
  const [subjectives, setSubjectives] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getInfo();
    getchart();
    getSubjective();
    phoneNum();
  }, []);
  const goToMain = () => {
    navigate('/');
  };

  const getInfo = async () => {
    if (adminToken) {
      try {
        const res = await axios.get(`${API.MAIN}/statistic/sum/${id}`, {
          headers: {
            Authorization: adminToken,
          },
        });
        setInfo(res.data);
        const { count } = res.data;
        if (count === '0') {
          alert('불가넝');
          navigate('/');
        }
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };
  const { count, start_date, end_date, status, name } = info;

  // chart 불러오는 함수
  const getchart = async () => {
    if (adminToken) {
      try {
        const res = await axios.get(`${API.MAIN}/statistic/multiple/${id}`, {
          headers: {
            Authorization: adminToken,
          },
        });
        setMultiple(res.data);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };

  const getSubjective = async () => {
    if (adminToken) {
      try {
        const res = await axios.get(`${API.MAIN}/statistic/subjective/${id}`, {
          headers: {
            Authorization: adminToken,
          },
        });
        setSubjectives(res.data);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };
  const phoneNum = async () => {
    if (adminToken) {
      try {
        const res = await axios.get(`${API.MAIN}/statistic/phone/${id}`, {
          headers: {
            Authorization: adminToken,
          },
        });
        setPhones(res.data);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };

  console.log('adfadf', multiple);
  return (
    <S.Layout>
      <S.SurveyDescription>
        <S.Title>통계</S.Title>
        <S.Name>{name}</S.Name>
        <S.SurveyInfo>
          <S.Period>
            {' '}
            설문 기간 : {start_date} - {end_date}
          </S.Period>
          <S.Participant> 설문 상태 : {status} </S.Participant>
          <S.Participant> 응답자 수 : {count}명 </S.Participant>
        </S.SurveyInfo>
        <S.StatisticsBox>
          <MulitpleList multiples={multiple} />
          <SubjectiveList subjectives={subjectives} />
          <PhoneList phone={phones} />
          <S.ButtonBox>
            <S.GotoMainButton onClick={goToMain}>돌아가기</S.GotoMainButton>
          </S.ButtonBox>
        </S.StatisticsBox>
      </S.SurveyDescription>
    </S.Layout>
  );
};
export default StatisticsPage;
