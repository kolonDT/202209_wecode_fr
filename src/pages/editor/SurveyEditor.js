import React from 'react';
import { Link } from 'react-router-dom';
import GlobalButton from '../../components/GlobalButton';
import MultipleSingle from '../../components/Questions/MultipleSingle';
import ShortDescription from '../../components/Questions/ShortDescription';
import LongDescription from '../../components/Questions/LongDescription';
import EmptyContainer from '../../components/Questions/EmptyContainer';
import MultipleMultiple from '../../components/Questions/MultipleMultiple';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { formListState } from '../../store/store';
import { FormProvider, useForm } from 'react-hook-form';
import { mock } from '../../mocks/mock';

const SurveyEditor = ({ options, formNum, setFormNum }) => {
  const [formList, setFormList] = useRecoilState(formListState);

  // const [formListIndex, setFormListIndex] = useState(
  //   Object.keys(values.flights)
  // );
  //삭제 기능을 위해 고유의 id 값을 가지고 있는 배열이 있어야함을 알게 됐다.

  //이걸 하려면 목데이터로 정확하게 만들어놔야가능하다
  // console.log(formList.formData);

  // const [key, setKey] = useState(1);

  // const [formListNum, setFormListNum] = useState(Object.keys(formList));

  const methods = useForm({
    reValidateMode: 'all',
    mode: 'all',

    defaultValues: {
      surveyName: '',
      formData: [
        {
          id: 1,
          type: '',
          question: '',
          options: [],
        },
      ],
    },
  });
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   mode: 'onBlur',
  // });

  const onSubmit = data => {
    console.log(data);
  };

  const QUESTION_ARRAY = sortIndex => {
    return {
      1: (
        <MultipleSingle
          sortIndex={sortIndex}
          label="multipleSingle"
          placeholder="제목을 입력하세요"
        />
      ),
      2: <MultipleMultiple sortIndex={sortIndex} label="multipleMultiple" />,
      3: <ShortDescription sortIndex={sortIndex} label="shortDescription" />,
      4: <LongDescription sortIndex={sortIndex} label="longDescription" />,
    };
  };
  console.log(formList);
  return (
    <SurveyContainer>
      <FormProvider {...methods}>
        <SurveyPage onSubmit={methods.handleSubmit(onSubmit)}>
          <TitleInput
            placeholder="제목을 입력하세요"
            {...methods.register('surveyName')}
          />
          {mock.formData.length > 0 ? (
            mock.formData.map((form, idx) => (
              <RealSurvey key={idx}>
                {QUESTION_ARRAY(idx + 1)[form.type]}
              </RealSurvey>
            ))
          ) : (
            <EmptyContainer />
          )}

          <NextContainer>
            <GlobalButton>
              <Link to="/">이전으로 가기</Link>
            </GlobalButton>
            <GlobalButton>다음으로 가기</GlobalButton>
          </NextContainer>
        </SurveyPage>
      </FormProvider>
    </SurveyContainer>
  );
};

export default SurveyEditor;

const RealSurvey = styled.div``;

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
