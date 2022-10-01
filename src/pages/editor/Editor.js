import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import OptionBox from '../../components/OptionBox';
import SurveyEditor from './SurveyEditor';
import { API } from '../../config';
import styled from 'styled-components';

const Editor = () => {
  const [form, setForm] = useState({});
  const adminToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.name;

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    if (!adminToken) {
      alert('로그아웃 되었습니다');
      navigate('./admin/login');
    } else {
      const res = await axios.get(`${API.MAIN}/main/form/${id}`, {
        headers: {
          Authorization: adminToken,
        },
      });
      const { formData } = res.data;
      setForm(formData);
    }
  };

  console.log(form);

  //form 으로 데이터 받아만 온 상태
  return (
    <Container>
      <SelectOption>
        <OpitionContainer>
          <OptionBox title="선택 질문 항목" options={SELECT_CATEGORY} />
        </OpitionContainer>
      </SelectOption>
      <MakeSurvey>
        <SurveyEditor />
      </MakeSurvey>
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  margin: 0 auto;
  border: 1px solid grey;
`;

const SelectOption = styled.div`
  flex: 1;
  background-color: #fff;
  border-right: 1px solid black;
`;

const MakeSurvey = styled.div`
  flex: 2.5;
`;

const OpitionContainer = styled.div`
  padding: 10px;
`;

const SELECT_CATEGORY = [
  '객관식 단일 선택',
  '객관식 복수 선택',
  '주관식 짧은 답변 선택',
  '주관식 긴 답변 선택',
];
