import React from 'react';
import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import UserQuestion from '../UserQuestion';
import styled, { css } from 'styled-components';

const MultipleM = ({ sortIndex, question, option }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleMultiple}
        question={question}
      >
        <ChoicesContainer>
          {option?.map(lists =>
            lists.map((list, idx) => (
              <Choice key={idx}>
                <CheckCircle
                  type="checkbox"
                  {...register(`userData[${sortIndex - 1}].selects.0[${idx}]`)}
                />
                <MultipleContent>{list}</MultipleContent>
              </Choice>
            ))
          )}
        </ChoicesContainer>
      </UserQuestion>
    </div>
  );
};

export default MultipleM;

const ChoicesContainer = styled.ul`
  margin-left: 50px;
`;
const CheckCircle = styled.input`
  position: absolute;
  top: 18px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  border: 1px solid #ced4da;

  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const MultipleContent = styled.p`
  display: flex;
  padding-left: 10px;
  font-size: ${props => props.theme.style.smallFont};
  text-align: left;
  border: none;
  outline: none;
`;

const Choice = styled.li`
  position: relative;
  padding: 15px 10px 4px 34px;
  border: 1px solid transparent;
  margin-top: 3px;
  line-height: 28px;
`;
