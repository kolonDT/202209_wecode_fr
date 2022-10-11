import React from 'react';
import styled from 'styled-components';

const UserQuestion = ({ children, sortIndex, question, type }) => {
  return (
    <Container>
      <QuesTionContainer>
        <QuestionTitleInput>
          <QuestionNum>{sortIndex}*</QuestionNum>
          <QuestionContent>{question}</QuestionContent>
        </QuestionTitleInput>
      </QuesTionContainer>
      {children}
    </Container>
  );
};

export default UserQuestion;

const Container = styled.div`
  padding: 25px 29px;
  position: relative;
`;

const QuestionContent = styled.p`
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  vertical-align: center;
`;

const QuesTionContainer = styled.div`
  position: relative;
`;
const QuestionTitleInput = styled.div`
  padding-left: 50px;
`;

const QuestionNum = styled.span`
  position: absolute;
  font-weight: 400;
  font-size: 20px;
  top: -1px;
  left: 10px;
  color: rgba(33, 33, 33, 0.5);
`;
