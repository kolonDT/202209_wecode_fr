import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Layout = styled.div`
  ${props => props.theme.variables.absoluteCenter}
  width: 500px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 1px 3px 2px #ddd;
  background-color: #fafafa;
`;

export const LayoutDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Titlebox = styled.div`
  ${props => props.theme.variables.flex()};
  width: 100%;
  height: 100px;
  display: flex;
`;

export const Title = styled.div`
  font-size: ${props => props.theme.style.middleFont};
  margin-top: 40px;
  font-weight: 600;
`;

export const CheckBox = styled.div`
  width: 100%;
  height: 320px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DuplicateAndAnonymous = styled.form`
  ${props => props.theme.variables.flex('row', 'space-evenly')};
  margin: 10px 20px 0 20px;
`;

export const ModalText = styled.div`
  font-size: ${props => props.theme.style.smallFont};
`;

export const Check = styled.input`
  width: 25px;
  height: 25px;
`;

export const ButtonBox = styled.div`
  ${props => props.theme.variables.flex()};
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  width: 80px;
  height: 50px;
  background-color: #2087c9;
  opacity: 0.86;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  font-size: ${props => props.theme.style.smallFont};
  font-weight: 500;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const LandingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const LandingText = styled(ModalText)`
  margin-right: 82px;
`;

export const LandingInput = styled.input`
  width: 260px;
  height: 35px;
  margin-top: 18px;
  font-size: 15px;
`;
