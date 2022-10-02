import React from 'react';
import { useNavigate } from 'react-router';
import * as S from './LinkModalStyle';

const LinkModal = ({ form }) => {
  const { surveyLink } = form;
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };
  const handleCopyClipBoard = async surveyLink => {
    try {
      await navigator.clipboard.writeText(surveyLink);
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };
  return (
    <S.Background>
      <S.Layout>
        <S.LinkBox>
          <S.LinkBoxDetail>
            <S.LinkGuide>설문지가 만들어졌습니다</S.LinkGuide>
            <S.LinkInput value={surveyLink} readOnly />
            <S.ButtonDetail>
              <S.CopyButton onClick={() => handleCopyClipBoard(surveyLink)}>
                복사하기
              </S.CopyButton>
              <S.CopyButton onClick={goToMain}>메인 이동</S.CopyButton>
            </S.ButtonDetail>
          </S.LinkBoxDetail>
        </S.LinkBox>
      </S.Layout>
    </S.Background>
  );
};
export default LinkModal;
