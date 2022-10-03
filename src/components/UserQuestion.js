import React from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const UserQuestion = ({ register, children, sortIndex, question }) => {
  return (
    <Container>
      <QuesTionContainer>
        <QuestionTitleInput>
          <QuestionNum>{sortIndex}</QuestionNum>
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
  top: -2px;
  left: 30px;
`;
