import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MultipleSingle from '../../components/Questions/MultipleSingle';
import ShortDescription from '../../components/Questions/ShortDescription';
import LongDescription from '../../components/Questions/LongDescription';
import EmptyContainer from '../../components/Questions/EmptyContainer';
import MultipleMultiple from '../../components/Questions/MultipleMultiple';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { formListState } from '../../store/store';
import { FormProvider, useForm } from 'react-hook-form';
import EditorModal from '../../components/EditorModal/EditorModal';
import ImageUpload from '../../components/Questions/ImageUpload';
import PhoneInput from '../../components/Questions/PhoneInput';
import PrivacyConsent from '../../components/Questions/PrivacyConsent';
import { API } from '../../config';

const SurveyEditor = ({
  options,
  formNum,
  setFormNum,
  setOpenEditorModal,
  openEditorModal,
}) => {
  const formList = useRecoilValue(formListState);

  // const [formListIndex, setFormListIndex] = useState(
  //   Object.keys(values.flights)
  // );
  //삭제 기능을 위해 고유의 id 값을 가지고 있는 배열이 있어야함을 알게 됐다.

  //이걸 하려면 목데이터로 정확하게 만들어놔야가능하다
  // console.log(formList.formData);

  // const [key, setKey] = useState(1);

  // const [formListNum, setFormListNum] = useState(Object.keys(formList));

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/data.json')
  //     .then(res => res.json())
  //     .then(result => setFormList(result));
  // }, [setFormList]);

  const methods = useForm();
  const { register } = methods;

  const QUESTION_ARRAY = (sortIndex, ...args) => {
    return {
      1: (
        <MultipleSingle
          sortIndex={sortIndex}
          label="multipleSingle"
          question={args[0]}
          option={args[1]}
        />
      ),
      2: (
        <MultipleMultiple
          sortIndex={sortIndex}
          label="multipleMultiple"
          question={args[0]}
          option={args[1]}
        />
      ),
      3: (
        <ShortDescription
          sortIndex={sortIndex}
          label="shortDescription"
          question={args[0]}
        />
      ),
      4: (
        <LongDescription
          sortIndex={sortIndex}
          label="longDescription"
          question={args[0]}
        />
      ),
      5: <ImageUpload />,
      6: <PhoneInput />,
      7: <PrivacyConsent />,
    };
  };

  const adminToken = localStorage.getItem('token');
  const onSubmit = data => {
    fetch(`${API.EDITOR}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: adminToken,
      },
      body: data,
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };
  // console.log(methods.formState.errors);
  return (
    <SurveyContainer>
      <FormProvider {...methods}>
        <SurveyPage onSubmit={methods.handleSubmit(onSubmit)}>
          <TitleInput
            placeholder="제목을 입력하세요"
            {...register('surveyName')}
          />
          <InputContainer>
            <DateP>시작 날짜</DateP>
            <DateInput
              placeholder="ex)2022-09-19"
              pattern="\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])"
              {...methods.register('startDate', {
                required: 'this is a required',
                maxLength: {
                  value: 13,
                  message: 'warning',
                },
              })}
            />

            <DateP>종료 날짜</DateP>
            <DateInput
              placeholder="ex)2022-10-19"
              pattern="\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])"
              {...methods.register('endDate', {
                required: 'this is a required',
                maxLength: {
                  value: 13,
                  message: 'warning',
                },
              })}
            />
          </InputContainer>

          {formList.formData.length > 0 ? (
            formList.formData.map((form, idx) => (
              <div key={idx}>
                {QUESTION_ARRAY(idx + 1, form.question, form.option)[form.type]}
              </div>
            ))
          ) : (
            <EmptyContainer />
          )}

          <NextContainer>
            <Button>
              <Link to="/">이전으로 가기</Link>
            </Button>
            <Button onClick={() => setOpenEditorModal(true)}>
              다음으로 가기
            </Button>
          </NextContainer>
          {openEditorModal === true && <EditorModal />}
        </SurveyPage>
      </FormProvider>
    </SurveyContainer>
  );
};

export default SurveyEditor;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DateP = styled.p`
  margin-right: 5px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DateInput = styled.input`
  margin-right: 30px;
`;

const Button = styled.button`
  margin-left: ${children => children.children === '...' || '30px'};
  padding: ${children =>
    children.children === '이전으로 가기' || '다음으로 가기' ? '5Px 10px' : 0};
  color: #ffffff;
  border-color: ${props => props.theme.style.mainBlue};
  background-color: ${props => props.theme.style.mainBlue};
  border-radius: 5.5px;
  height: 50px;
  position: ${children => children.children === '...' && 'absolute'};
  opacity: 0.86;

  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const SurveyContainer = styled.div`
  z-index: 1;
  padding: 5px 10px;
`;

const SurveyPage = styled.form`
  position: relative;
  width: 770px;
  margin: 99px auto 95px;
  padding-top: 1px;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px;
  backdrop-filter: blur(30px);
  background-color: rgb(255, 255, 255);
`;

const TitleInput = styled.input`
  font-size: ${props => props.theme.style.middleFont};
  font-family: 600;
  width: 100%;
  padding: 15px 29px 8px;
  margin: 15px 0px 22px 0;
  text-align: center;
  border: none;
  border-radius: 25px;
  outline: none;
`;

const NextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 30px 49px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
`;
export const QUESTION_ARRAY_TYPE = {
  multipleSingle: 1,
  multipleMultiple: 2,
  shortDescription: 3,
  longDescription: 4,
};
