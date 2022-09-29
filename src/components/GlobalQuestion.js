import React from 'react';
import GlobalInput from './GlobalInput';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { formListState } from '../store/store';

const GlobalQuestion = ({ children }) => {
  const [formList, setFormList] = useRecoilState(formListState);

  return (
    <Container>
      <QuesTionContainer>
        <QuestionTitleInput>
          <QuestionNum>1</QuestionNum>
          <GlobalInput />
        </QuestionTitleInput>
        <Icon>
          <MdDelete className="uil uil-trash-alt" />
        </Icon>
      </QuesTionContainer>
      {children}
    </Container>
  );
};

export default GlobalQuestion;

const Container = styled.div`
  padding: 25px 29px;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
    background-color: rgba(33, 33, 33, 0.1);
  }
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
  top: 2px;
`;

const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 5px;

  &:hover {
    color: red;
  }
`;
