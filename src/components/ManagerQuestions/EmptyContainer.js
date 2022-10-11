import React from 'react';
import styled from 'styled-components';

const EmptyContainer = () => {
  return (
    <ActualQueryContainer>
      선택항목을 클릭하여 추가하세요. <br />
      <Caution>질문 하나 이상 추가해주세요.</Caution>
    </ActualQueryContainer>
  );
};

export default EmptyContainer;

const ActualQueryContainer = styled.div`
  padding: 40px 0 24px;
  padding-bottom: 37px;
  height: auto;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
`;

const Caution = styled.div`
  margin-top: 30px;
  color: grey;
`;
