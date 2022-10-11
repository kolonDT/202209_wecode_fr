import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EndingGreeting = () => {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Container>답변이 제출되었습니다. 감사합니다.</Container>
      <InformNews>{count}초 후 랜딩 페이지로 이동합니다.</InformNews>
    </>
  );
};

export default EndingGreeting;

const Container = styled.div`
  text-align: left;
  padding-left: 30px;
`;

const InformNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
