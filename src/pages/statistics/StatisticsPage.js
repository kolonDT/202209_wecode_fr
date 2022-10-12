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
import { Outlet } from 'react-router-dom';
import * as S from './StatisticsStyle';

const StatisticsPage = () => {
  //메인에서 받은 id URL에서 잘라서 썼습니다
  const location = useLocation();
  const url = location.pathname;
  const id = url.substring(11);
  const adminToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const [info, setInfo] = useState({}); // 해당 서베이 info
  const [multiple, setMultiple] = useState(); // 해당 서베이 객관식 데이터 (차트)
  const [subjectives, setSubjectives] = useState([]); // 해당 서베이 서술형 데이터
  const [personal, setPersonal] = useState([]); // 해당 서베이 응답자의 번호
  const [nonePhones, setNonePhones] = useState(true);

  useEffect(() => {
    getInfo();
    getChart();
    getSubjective();
    person();
  }, []);

  const goToMain = () => {
    navigate('/');
  };

  // 서베이 info 받는 함수
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
          alert('응답자가 없습니다');
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

  const getChart = async () => {
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
  // 핸드폰 번호 받는 함수
  const person = async () => {
    if (adminToken) {
      try {
        const res = await axios.get(`${API.MAIN}/statistic/phone/${id}`, {
          headers: {
            Authorization: adminToken,
          },
        });
        const { data } = res;
        setPersonal(data);
        if (data.length === null) {
          setNonePhones(false);
        }
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };

  return (
    <>
      <Outlet />
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
            {nonePhones === true && <PhoneList personal={personal} />}
            <S.ButtonBox>
              <S.GotoMainButton onClick={goToMain}>돌아가기</S.GotoMainButton>
            </S.ButtonBox>
          </S.StatisticsBox>
        </S.SurveyDescription>
      </S.Layout>
    </>
  );
};
export default StatisticsPage;
