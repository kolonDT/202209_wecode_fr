import React, { useState } from 'react';
import OptionBox from '../../components/OptionBox';
import SurveyEditor from './SurveyEditor';
import styled from 'styled-components';
import MultipleSingle from '../../components/Questions/MultipleSingle';
import MultipleMultiple from '../../components/Questions/MultipleMultiple';
import ShortDescription from '../../components/Questions/ShortDescription';
import LongDescription from '../../components/Questions/LongDescription';

const Editor = () => {
  const [formNum, setFormNum] = useState(0);

  const menuArr = [
    { id: 1, title: '객관식 단일 선택' },
    { id: 2, title: '객관식 복수 선택' },
    { id: 3, title: '주관식 짧은 답변 선택' },
    { id: 4, title: '주관식 긴 답변 선택' },
  ];
  console.log('랜더링돼요');
  return (
    <Container>
      <SelectOption>
        <OptionContainer>
          <OptionBox
            title="선택 질문 항목"
            options={menuArr}
            setShowForm={setFormNum}
            showForm={formNum}
          />
        </OptionContainer>
      </SelectOption>
      <MakeSurvey>
        <SurveyEditor showForm={formNum} options={menuArr} />
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
