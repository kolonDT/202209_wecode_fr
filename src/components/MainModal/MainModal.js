import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainModalStyle';

const MainModal = () => {
  const navigate = useNavigate();
  const goToNewTemplate = () => {
    navigate('/');
  };
  const goToCustomerOpinion = () => {
    navigate('/');
  };
  const goToGuide = () => {
    navigate('/');
  };
  const goToSatisfaction = () => {
    navigate('/');
  };
  return (
    <S.Background>
      <S.ModalSize>
        <S.Layout>
          <S.TitleBox>
            <S.Title>설문 제작 방법을 선택하세요</S.Title>
          </S.TitleBox>
          <S.TemplateSelect>
            <S.Template>
              {/* 새설문지 만들기 버튼*/}
              <S.NewTemplateBox onClick={goToNewTemplate}>
                <S.NewTemplate alt="img" src="/images/newTemplate.png" />
                <S.NewTemplateTitle> 새 설문지 만들기 </S.NewTemplateTitle>
              </S.NewTemplateBox>
              {/* 고객 의견 템플릿 버튼 */}
              <S.NewTemplateBox onClick={goToCustomerOpinion}>
                <S.NewTemplate alt="imgs" src="/images/template.png" />
                <S.NewTemplateTitle> 고객 의견 </S.NewTemplateTitle>
              </S.NewTemplateBox>
              {/* 행사 안내 템플릿 버튼 */}
              <S.NewTemplateBox onClick={goToGuide}>
                <S.NewTemplate alt="imgg" src="/images/template.png" />
                <S.NewTemplateTitle> 행사 안내 </S.NewTemplateTitle>
              </S.NewTemplateBox>
              {/* 만족도 조사 템플릿 버튼 */}
              <S.NewTemplateBox onClick={goToSatisfaction}>
                <S.NewTemplate alt="imga" src="/images/template.png" />
                <S.NewTemplateTitle> 만족도 조사 </S.NewTemplateTitle>
              </S.NewTemplateBox>
            </S.Template>
          </S.TemplateSelect>
        </S.Layout>
      </S.ModalSize>
    </S.Background>
  );
};

export default MainModal;
