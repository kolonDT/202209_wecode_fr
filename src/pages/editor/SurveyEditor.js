import React from 'react';
import { Link } from 'react-router-dom';
import GlobalButton from '../../components/GlobalButton';
import MultipleSingle from '../../components/Questions/MultipleSingle';
import ShortDescription from '../../components/Questions/ShortDescription';
import LongDescription from '../../components/Questions/LongDescription';
import EmptyContainer from '../../components/Questions/EmptyContainer';
import MultipleMultiple from '../../components/Questions/MultipleMultiple';
import styled from 'styled-components';

const SurveyEditor = () => {
  return (
    <SurveyContainer>
      <SurveyPage>
        <TitleInput placeholder="제목 입력" />
        <EmptyContainer />
        <MultipleSingle />
        <MultipleMultiple />
        <ShortDescription />
        <LongDescription />
        <NextContainer>
          <GlobalButton>
            <Link to="/">이전으로 가기</Link>
          </GlobalButton>
          <GlobalButton>다음으로 가기</GlobalButton>
        </NextContainer>
      </SurveyPage>
    </SurveyContainer>
  );
};

export default SurveyEditor;

const SurveyContainer = styled.div`
  z-index: 1;
  padding: 5px 10px;
`;

const SurveyPage = styled.div`
  position: relative;
  width: 770px;
  margin: 99px auto 95px;
  padding-top: 1px;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px;
  backdrop-filter: blur(30px);
  background-color: rgb(255, 255, 255);
`;

const TitleInput = styled.input`
  font-size: ${props => props.theme.style.middleFont};
  font-family: 600;
  width: 100%;
  padding: 15px 29px 8px;
  margin: 15px 0px 22px 0;
  text-align: center;
  border: none;
  border-radius: 25px;
  outline: none;
`;

const NextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 30px 49px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
`;
