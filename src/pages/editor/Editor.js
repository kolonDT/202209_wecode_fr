import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import OptionBox from '../../components/OptionBox';
import SurveyEditor from './SurveyEditor';
import { API } from '../../config';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { formListState, formNumState, openState } from '../../store/store';

const Editor = () => {
  const [totalForm, setTotalForm] = useState({});
  const [formNum, setFormNum] = useRecoilState(formNumState);
  const [formList, setFormList] = useRecoilState(formListState);
  const [openEditorModal, setOpenEditorModal] = useRecoilState(openState);

  const adminToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.name;

  // console.log(id);
  // useEffect(() => {
  //   getData();
  // });

  // const getData = async () => {
  //   if (!adminToken) {
  //     alert('로그아웃 되었습니다');
  //     navigate('./admin/login');
  //   } else {
  //     const res = await axios.get(`${API.MAIN}/main/form/${id}`, {
  //       headers: {
  //         Authorization: adminToken,
  //       },
  //     });
  //     const { formData } = res.data;
  //     setTotalForm(formData);
  //   }
  // };

  const menuArr = [
    { id: 1, title: '객관식 단일 선택' },
    { id: 2, title: '객관식 복수 선택' },
    { id: 3, title: '주관식 짧은 답변 선택' },
    { id: 4, title: '주관식 긴 답변 선택' },
    { id: 5, title: '이미지 업로드 선택' },
    { id: 6, title: '핸드폰 번호 입력 선택' },
    { id: 7, title: '개인 정보 동의 여부 선택' },
  ];

  return (
    <Container>
      <SelectOption>
        <OptionContainer>
          <OptionBox
            title="선택 질문 항목"
            options={menuArr}
            setFormNum={setFormNum}
            formNum={formNum}
          />
        </OptionContainer>
      </SelectOption>
      <MakeSurvey>
        <SurveyEditor
          formNum={formNum}
          setFormNum={setFormNum}
          options={menuArr}
          setOpenEditorModal={setOpenEditorModal}
          openEditorModal={openEditorModal}
          id={id}
        />
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
`;

const SelectOption = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px;
  backdrop-filter: blur(30px);
  min-height: 95vh;
`;

const MakeSurvey = styled.div`
  flex: 2.5;
`;

const OptionContainer = styled.div`
  padding: 10px;
`;
