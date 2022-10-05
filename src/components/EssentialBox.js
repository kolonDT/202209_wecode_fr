import React, { Children } from 'react';
import { MdInfo } from 'react-icons/md';
import { constSelector } from 'recoil';
import styled from 'styled-components';

const EssentialBox = ({ children }) => {
  return (
    <Container>
      <Essential>
        <Icon>
          <MdInfo />
        </Icon>
        {children}
      </Essential>
    </Container>
  );
};

export default EssentialBox;

const Container = styled.div``;

const Icon = styled.span`
  font-size: 20px;
  position: absolute;
  left: 5px;
`;
const Essential = styled.p`
  position: absolute;
  left: 20px;
  top: -20px;
  padding: 5px 30px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 27px;
  color: ${props => props.theme.style.red};
`;
