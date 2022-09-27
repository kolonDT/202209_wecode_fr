import React from 'react';
import styled from 'styled-components';
import OptionBox from '../../components/Option';
import SurveyEditor from './SurveyEditor';

const Editor = () => {
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
