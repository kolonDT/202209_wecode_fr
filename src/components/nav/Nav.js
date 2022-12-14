import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import MainModal from '../MainModal/MainModal.js';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const Nav = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const goToMain = () => {
    window.location.replace('/');
  };

  const toLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    navigate('/admin/login');
  };
  return (
    <Container>
      <FlexContainer>
        <NavLeft>
          <Logo onClick={goToMain}>KODA</Logo>

          <SubLogo>코오롱이 답하다</SubLogo>
        </NavLeft>
        <NavRight>
          <Li onClick={() => setOpenModal(true)}>
            <LogoBox>
              <MdOutlineAddCircleOutline />
            </LogoBox>
            새설문 작성
          </Li>
          <Li onClick={() => toLogout()}>로그아웃</Li>
        </NavRight>
      </FlexContainer>
      {openModal === true && (
        <MainContainer>
          <MainModal openModal={openModal} setOpenModal={setOpenModal} />
        </MainContainer>
      )}
    </Container>
  );
};

export default Nav;

const MainContainer = styled.div`
  overflow: hidden;
  height: 100%;
`;

const LogoBox = styled.div`
  position: absolute;
  left: -20px;
  top: -1px;
`;

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${props => props.theme.style.mainBlue};
  color: white;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.style.bigFont};
  font-weight: 800;
  padding-left: ${props => props.theme.style.paddingSpace};
  left: ${props => props.theme.style.paddingSpace};
  cursor: pointer;
`;

const SubLogo = styled.span`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.style.smallFont};
  font-weight: 500;
  padding-left: 20px;
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
  gap: 15px;
  padding-right: 60px;
  font-weight: 400;
  position: relative;
`;

const Li = styled.li`
  font-size: ${props => props.theme.style.smallerFont};
  padding-right: ${props => props.theme.style.paddingSpace};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.style.mainBeige};
  }
`;
