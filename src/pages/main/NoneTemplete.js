import React from 'react';
import * as S from './TemplateStyle';

// 템플릿 없을 때 나오는 컴포넌트

const NoneTemplete = () => {
  return (
    <S.LayoutNoneTemplete>
      <S.NoneTempleteGuide>
        진행중인 없습니다. 새 설문지 작성 버튼을 통해 새 설문지를 만들어보세요!
      </S.NoneTempleteGuide>
    </S.LayoutNoneTemplete>
  );
};

export default NoneTemplete;
