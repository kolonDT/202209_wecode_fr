import React from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const GlobalQuestion = ({
  register,
  children,
  sortIndex,
  type,
  onRemove,
  formId,
}) => {
  return (
    <Container>
      <QuesTionContainer>
        <QuestionTitleInput>
          <QuestionNum>{sortIndex}</QuestionNum>
          <QuestionType
            type="tel"
            value={type}
            {...register(`formData[${sortIndex - 1}].type`)}
          />
          <QuestionContent
            placeholder={`${sortIndex}번 질문을 입력하세요`}
            {...register(`formData[${sortIndex - 1}].question`)}
          />
        </QuestionTitleInput>
        <Icon onClick={() => onRemove(formId)}>
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
    background-color: rgba(33, 33, 33, 0.05);
  }
`;

const QuestionContent = styled.input`
  padding-left: 15px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: none;
  outline: none;

  ${Container}:hover & {
    background-color: rgba(33, 33, 33, 0.01);
    cursor: pointer;
  }
`;

const QuesTionContainer = styled.div`
  position: relative;
`;
const QuestionTitleInput = styled.div`
  padding-left: 50px;
`;

const QuestionNum = styled.p`
  position: absolute;
  top: 3px;
  left: 30px;
  width: 30px;
  font-weight: 400;
  font-size: 20px;
  color: rgba(33, 33, 33, 0.5);
  border: none;
  outline: none;

  ${Container}:hover & {
    background-color: rgba(33, 33, 33, 0.01);
    cursor: pointer;
  }
`;

const QuestionType = styled.input`
  width: 30px;
  font-weight: 400;
  font-size: 20px;
  color: rgba(33, 33, 33, 0.5);
  border: none;
  outline: none;
  display: none;
  ${Container}:hover & {
    background-color: rgba(33, 33, 33, 0.01);
    cursor: pointer;
  }
`;
const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 5px;

  &:hover {
    color: red;
  }
`;
