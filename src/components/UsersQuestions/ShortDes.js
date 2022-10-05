import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import EssentialBox from '../EssentialBox';
import UserQuestion from '../UserQuestion';

const ShortDes = ({ sortIndex, question }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.shortDescription}
        name="formData."
        question={question}
      >
        <ShortInput
          cols="20"
          rows="1"
          {...register(`userData[${sortIndex - 1}].answer`, {
            required: {
              value: '짧은 답변',
              message: `짧은 답변 무시하뉘!`,
            },
          })}
        />
        {errors && (
          <EssentialBox>
            {errors?.userData?.map(data => data?.answer?.message)}
          </EssentialBox>
        )}
      </UserQuestion>
    </div>
  );
};

export default ShortDes;

const ShortInput = styled.input`
  display: flex;
  margin-left: 50px;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  width: 50%;
  resize: none;
  padding: 4px 9px;
  margin-top: 20px;
  outline: none;
  color: black;
  border-color: ${props => props.theme.style.boxBorderColor};
  background-color: ${props => props.theme.style.boxColor};
`;
