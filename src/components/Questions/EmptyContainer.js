import React from 'react';
import styled from 'styled-components';

const EmptyContainer = () => {
  return (
    <ActualQueryContainer>선택항목을 클릭하여 추가하세요.</ActualQueryContainer>
  );
};

export default EmptyContainer;

const ActualQueryContainer = styled.div`
  padding: 18px 0 24px;
  padding-bottom: 37px;
  height: auto;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
`;
