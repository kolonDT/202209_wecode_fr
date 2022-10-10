import React from 'react';
import { useFormContext } from 'react-hook-form';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import EssentialBox from '../EssentialBox';
import UserQuestion from '../UserQuestion';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

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
            placeholder="이름을 입력해주세요"
            {...register(`userData[${sortIndex - 1}].name`, {
              required: {
                value: '이름',
                message: `이름을 입력해주세요`,
              },
            })}
          />
          {/* <ErrorMessage
            errors={errors}
            name={`userData[${sortIndex - 1}].name`}
            render={({ message }) => <EssentialBox>{message}</EssentialBox>}
          /> */}
          <Phone
            placeholder="ex)01068203867"
            {...register(`userData[${sortIndex - 1}].phone`, {
              required: {
                value: '폰',
                message: `핸드폰 번호를 입력해주세요`,
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name={`userData[${sortIndex - 1}].phone`}
            render={({ message }) => <Essential>{message}</Essential>}
          />
          <ErrorMessage
            errors={errors}
            name={`userData[${sortIndex - 1}].name`}
            render={({ message }) => (
              <EssentialContainer>{message}</EssentialContainer>
            )}
          />
        </Display>
      </UserQuestion>
    </div>
  );
};

const EssentialContainer = styled.div`
  position: absolute;
  left: 290px;
  padding: 5px 30px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 27px;
  color: ${props => props.theme.style.red};
`;
const Essential = styled.div`
  position: absolute;
  left: 280px;
  bottom: 60px;
  padding: 5px 30px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 27px;
  color: ${props => props.theme.style.red};
`;
const Phone = styled.input`
  margin-left: 50px;
  margin-top: 40px;
  //위치 동일하게 하기 위해
  font-size: 16px;
  text-align: center;
  line-height: 28px;
  border: 1px solid;
  border-radius: 3px;
  height: 38px;
  width: 300px;
  resize: none;
  padding: 4px 9px;
  outline: none;
  color: rgba(0, 41, 130, 0.33);
  border-color: rgba(0, 41, 130, 0.5);
  background-color: rgba(0, 41, 130, 0.05);
`;

const Display = styled.div`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')};
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
export default PhoneInput;
