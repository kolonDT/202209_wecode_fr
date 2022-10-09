import React from 'react';
import * as S from './TemplateStyle';

// 템플릿 없을 때 나오는 컴포넌트

const NoneTemplete = () => {
  return (
    <S.LayoutNoneTemplete>
      <S.NoneTempleteGuide>
        만들어진 템플릿이 없습니다! 새 설문지 만들기 버튼을 통해 새 설문지를
        만들어보세요!
      </S.NoneTempleteGuide>
    </S.LayoutNoneTemplete>
  );
};

export default NoneTemplete;
