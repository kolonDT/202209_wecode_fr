import React, { forwardRef } from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { formListState, formNumState, keyState } from '../store/store';
import { useFormContext } from 'react-hook-form';

const GlobalQuestion = ({ children, sortIndex }) => {
  const [formList, setFormList] = useRecoilState(formListState);
  const { control, register } = useFormContext(); // retrieve all hook methods

  //삭제 기능 제대로 다시 만들어야해요.. 우선 잠시 패쓰 지금 에러 천지

  const onRemove = sortIndex => {
    setFormList(formList.formData.filter(form => form.id !== sortIndex));
  };

  const { onChange } = register;

  return (
    <Container>
      <QuesTionContainer>
        <QuestionTitleInput>
          <QuestionNum>{sortIndex}</QuestionNum>
          <QuestionContent
            placeholder={`${sortIndex}번 질문을 입력하세요`}
            {...register('form')}
          />
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

const QuestionContent = styled.input`
  padding-left: 15px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: none;
  outline: none;
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
