import { React, useEffect, useState } from 'react';
import { API } from '../../config';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { mock } from '../../mocks/mock';
import UserSurvey from './UserSurvey';
import * as S from './UserSurveyStyle';
import styled from 'styled-components';

const UserContainer = () => {
  const methods = useForm();
  const [form, setForm] = useState({}); // form 데이터 받는 State
  const [survey, setSurvey] = useState({}); // form 데이터 이외의 State
  const location = useLocation();
  const url = location.pathname;

  const id = url.substring(12);

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(result => setForm(result));
  }, []);
  console.log(form);

  return (
    <S.Background>
      <FormProvider {...methods}>
        <S.SurveyForm onSubmit={methods.handleSubmit(onSubmit)}>
          <S.Title>{form.surveyName}</S.Title>
          <S.Period>
            참여 기간 :{form.startDate} ~ {form.endDate}
          </S.Period>
          <UserSurvey form={form} userId={id} />
        </S.SurveyForm>
      </FormProvider>
    </S.Background>
  );
};

export default UserContainer;

// const InputContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const DateP = styled.p`
//   margin-right: 5px;
//   display: flex;
//   align-items: center;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// `;

// const DateInput = styled.input`
//   margin-right: 30px;
// `;

// const Button = styled.button`
//   margin-left: ${children => children.children === '...' || '30px'};
//   padding: ${children =>
//     children.children === '이전으로 가기' || '다음으로 가기' ? '5Px 10px' : 0};
//   color: #ffffff;
//   border-color: ${props => props.theme.style.mainBlue};
//   background-color: ${props => props.theme.style.mainBlue};
//   border-radius: 5.5px;
//   height: 50px;
//   position: ${children => children.children === '...' && 'absolute'};
//   opacity: 0.86;

//   cursor: pointer;
//   &:hover {
//     opacity: 1;
//   }
// `;

// const SurveyContainer = styled.div`
//   z-index: 1;
//   padding: 5px 10px;
// `;

// const SurveyPage = styled.form`
//   position: relative;
//   width: 770px;
//   margin: 99px auto 95px;
//   padding-top: 1px;
//   border-radius: 25px;
//   box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px;
//   backdrop-filter: blur(30px);
//   background-color: rgb(255, 255, 255);
// `;

// const TitleInput = styled.input`
//   font-size: ${props => props.theme.style.middleFont};
//   font-family: 600;
//   width: 100%;
//   padding: 15px 29px 8px;
//   margin: 15px 0px 22px 0;
//   text-align: center;
//   border: none;
//   border-radius: 25px;
//   outline: none;
// `;

// const NextContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   position: relative;
//   padding: 30px 49px 30px;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   -webkit-box-pack: end;
//   -ms-flex-pack: end;
// `;
// export const QUESTION_ARRAY_TYPE = {
//   multipleSingle: 1,
//   multipleMultiple: 2,
//   shortDescription: 3,
//   longDescription: 4,
// };
