import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import EssentialBox from '../EssentialBox';
import GlobalQuestion from '../GlobalQuestion';
import UserQuestion from '../UserQuestion';

const PhoneInput = ({ sortIndex, question }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        question={question}
        type={QUESTION_ARRAY_TYPE.phoneInput}
        register={register}
      >
        <Display>
          <Phone
            placeholder="ex)01068203867"
            {...register(`userData[${sortIndex - 1}].phone`, {
              required: {
                value: '폰',
                message: `폰 입력해주세요`,
              },
            })}
          />
        </Display>
        {errors && (
          <EssentialBox>
            {errors?.userData?.map(data => data?.phone?.message)}
          </EssentialBox>
        )}
      </UserQuestion>
    </div>
  );
};

const Phone = styled.input`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
  //위치 동일하게 하기 위해
  font-size: 16px;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 38px;
  width: 170px;
  resize: none;
  padding: 4px 9px;
  outline: none;
  color: rgba(0, 41, 130, 0.33);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Display = styled.div`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')};
`;
export default PhoneInput;
