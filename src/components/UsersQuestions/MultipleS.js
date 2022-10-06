import React from 'react';
import GlobalQuestion from '../GlobalQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import { useFormContext } from 'react-hook-form';
import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
  MdInfo,
} from 'react-icons/md';
import styled, { css } from 'styled-components';
import UserQuestion from '../UserQuestion';
import EssentialBox from '../EssentialBox';

const MultipleS = ({ sortIndex, label, question, option }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // errors.map(error => console.log(error.select));

  // errors?.userData?.map(data => console.log(data?.select?.message));
  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.multipleSingle}
        question={question}
      >
        <ChoicesContainer>
          {option?.map((lists, idx) =>
            lists.map((list, idx) => (
              <Choice key={idx}>
                <CheckCircle
                  type="radio"
                  name="myRadio"
                  value={list}
                  {...register(`userData[${sortIndex - 1}].select`, {
                    required: {
                      value: '단수',
                      message: `답변 필수 질문입니다. 아래 질문에 답하세요 `,
                    },
                  })}
                />
                <MultipleContent>{list}</MultipleContent>
              </Choice>
            ))
          )}
        </ChoicesContainer>
        {errors && (
          <EssentialBox>
            {errors?.userData?.map(data => data?.select?.message)}
          </EssentialBox>
        )}
      </UserQuestion>
    </div>
  );
};

export default MultipleS;

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

const Button = styled.span`
  position: absolute;
  top: 18px;
  right: ${props => (props.name === 'minus' ? '70px' : '100px')};
  font-size: 20px;
  margin-left: 1000px;

  &:hover {
    color: ${props => (props.name === 'add' ? 'green' : 'red')};
  }
`;
