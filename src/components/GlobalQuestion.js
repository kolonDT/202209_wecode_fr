import React from 'react';
import GlobalInput from './GlobalInput';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { formListState, idState } from '../store/store';

const GlobalQuestion = ({ children, sortIndex }) => {
  const [formList, setFormList] = useRecoilState(formListState);
  const setPlus = useSetRecoilState(idState);

  const onRemove = sortIndex => {
    setFormList(formList.filter(form => form.id !== sortIndex));
    setPlus(prev => prev - 1);
  };

  return (
    <Container>
      <QuesTionContainer>
        <QuestionTitleInput>
          <QuestionNum>{sortIndex}</QuestionNum>
          <GlobalInput />
        </QuestionTitleInput>
        <Icon onClick={() => onRemove(sortIndex)}>
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
  left: 30px;
`;

const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 5px;

  &:hover {
    color: red;
  }
`;
