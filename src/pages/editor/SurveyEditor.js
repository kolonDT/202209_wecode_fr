import React from 'react';
import GlobalButton from '../../components/GlobalButton';
import styled from 'styled-components';

const SurveyEditor = () => {
  return (
    <SurveyContainer>
      <SurveyPage>
        <TitleInput placeholder="제목 입력" />
        <ActualQueryContainer>이곳을 클릭해서 추가하세요</ActualQueryContainer>
        <NextContainer>
          <GlobalButton title="이전으로 가기" />
          <GlobalButton title="다음으로 가기" />
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
  padding: 15px 29px 8px;
  margin-top: 15px;
  margin-bottom: 22px;
  text-align: left;
  border: none;
  border-radius: 25px;
  outline: none;
`;

const ActualQueryContainer = styled.div`
  padding: 18px 0 24px;
  padding-bottom: 37px;
  height: auto;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
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
