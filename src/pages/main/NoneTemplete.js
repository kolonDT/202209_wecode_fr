import React from 'react';
import * as S from './TemplateStyle';

const NoneTemplete = () => {
  return (
    <S.LayoutNoneTemplete>
      <S.NoneTempleteGuide>
        설문지가 없습니다. 새 설문지 작성 버튼을 통해 새 설문지를 만들어보세요!
      </S.NoneTempleteGuide>
    </S.LayoutNoneTemplete>
  );
};

export default NoneTemplete;
