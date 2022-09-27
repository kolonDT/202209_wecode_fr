import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <FlexContainer>
        <NavLeft>
          <Logo>KODA</Logo>
          <SubLogo>코오롱이 답하다</SubLogo>
        </NavLeft>
        <NavRight>
          <Li>
            <Link to="/editor1">+ 새설문 작성</Link>
          </Li>
          <Li>로그아웃</Li>
        </NavRight>
      </FlexContainer>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: ${props => props.theme.style.mainBlue};
  color: white;
`;

const Logo = styled.h1`
  font-size: ${props => props.theme.style.bigFont};
  font-weight: 800;
  padding-left: ${props => props.theme.style.paddingSpace};
  position: fixed;
  left: ${props => props.theme.style.paddingSpace};
  z-index: 10000;
`;

const SubLogo = styled.span`
  font-size: ${props => props.theme.style.middleFont};
  font-weight: 800;
  padding-left: 220px;
`;

const FlexContainer = styled.div`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')};
  height: inherit;
`;
const NavLeft = styled.div`
  ${props => props.theme.variables.flex('center', 'left')};
`;
const NavRight = styled.ul`
  ${props => props.theme.variables.flex('row', 'right')};
  gap: 36px;
  padding-right: 160px;
  font-weight: 800;
  position: relative;
`;

const Li = styled.li`
  font-size: ${props => props.theme.style.smallFont};
  padding-right: ${props => props.theme.style.paddingSpace};
  cursor: pointer;
`;
