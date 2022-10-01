import React, { useState } from 'react';
import OptionBox from '../../components/OptionBox';
import SurveyEditor from './SurveyEditor';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { formListState, formNumState } from '../../store/store';
import { mock } from '../../mocks/mock';

const Editor = () => {
  const [formNum, setFormNum] = useRecoilState(formNumState);
  const [formList, setFormList] = useRecoilState(formListState);

  const menuArr = [
    { id: 1, title: '객관식 단일 선택' },
    { id: 2, title: '객관식 복수 선택' },
    { id: 3, title: '주관식 짧은 답변 선택' },
    { id: 4, title: '주관식 긴 답변 선택' },
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

const OptionContainer = styled.div`
  padding: 10px;
`;
