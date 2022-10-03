import React, { useEffect } from 'react';
import styled from 'styled-components';
import LongDescription from '../../components/ManagerQuestions/LongDescription';
import MultipleMultiple from '../../components/ManagerQuestions/MultipleMultiple';
import MultipleSingle from '../../components/ManagerQuestions/MultipleSingle';
import ShortDescription from '../../components/ManagerQuestions/ShortDescription';
import Consent from '../../components/UsersQuestions/Consent';
import ImageShow from '../../components/UsersQuestions/ImageShow';
import LongDes from '../../components/UsersQuestions/LongDes';
import MultipleM from '../../components/UsersQuestions/MultipleM';
import MultipleS from '../../components/UsersQuestions/MultipleS';
import Phone from '../../components/UsersQuestions/Phone';
import ShortDes from '../../components/UsersQuestions/ShortDes';

const UserSurvey = ({ form, userId }) => {
  console.log(form);
  console.log(userId);

  return (
    <div>
      {form?.formData?.map((el, idx) => (
        <div key={idx}>
          {QUESTION_ARRAY(idx + 1, el.question, el.option)[el.type]}
        </div>
      ))}
      <Button>완료</Button>
    </div>
  );
};

export default UserSurvey;

const Button = styled.button`
  display: block;
  margin-left: 85%;
  margin-bottom: 30px;
  padding: ${children =>
    children.children === '이전으로 가기' || '다음으로 가기' ? '5Px 20px' : 0};
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

// {formList.formData.length > 0 ? (
//             formList.formData.map((form, idx) => (
//               <div key={idx}>
//                 {QUESTION_ARRAY(idx + 1, form.question, form.option)[form.type]}
//               </div>
//             ))
//           ) : (
//             <EmptyContainer />
//           )}

//           <NextContainer>
//             <Button>
//               <Link to="/">이전으로 가기</Link>
//             </Button>
//             <Button onClick={() => setOpenEditorModal(true)}>
//               다음으로 가기
//             </Button>
//           </NextContainer>
//           {openEditorModal === true && <EditorModal />}
//         </SurveyPage>
//       </FormProvider>
//     </SurveyContainer>
//   );
// };

const QUESTION_ARRAY = (sortIndex, ...args) => {
  return {
    1: (
      <MultipleS
        sortIndex={sortIndex}
        label="multipleSingle"
        question={args[0]}
        option={args[1]}
      />
    ),
    2: (
      <MultipleM
        sortIndex={sortIndex}
        label="multipleMultiple"
        question={args[0]}
        option={args[1]}
      />
    ),
    3: (
      <ShortDes
        sortIndex={sortIndex}
        label="shortDescription"
        question={args[0]}
      />
    ),
    4: (
      <LongDes
        sortIndex={sortIndex}
        label="longDescription"
        question={args[0]}
      />
    ),
    5: <ImageShow />,
    6: <Phone />,
    7: <Consent />,
  };
};
