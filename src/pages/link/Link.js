import React from 'react';
import * as S from './LinkStyle';
import { useState } from 'react';

const Link = () => {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };

  //링크 데이터 text로 받으면 됩니다

  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };
  return (
    <S.Layout>
      <S.DiscriptionBox>
        <S.Title>칙칙 만족도 조사 링크</S.Title>
      </S.DiscriptionBox>
      <S.LinkBox>
        <S.LinkBoxDetail>
          <S.LinkGuide>아래 URL 링크를 배포하세요</S.LinkGuide>
          <S.LinkInput value={text} onChange={onChange} />
          <S.CopyButton onClick={() => handleCopyClipBoard(text)}>
            복사하기
          </S.CopyButton>
        </S.LinkBoxDetail>
      </S.LinkBox>
    </S.Layout>
  );
};

export default Link;
