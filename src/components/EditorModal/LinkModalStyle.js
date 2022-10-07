import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Layout = styled.div`
  ${props => props.theme.variables.absoluteCenter}
  width: 500px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 1px 3px 2px #ddd;
  background-color: #fafafa;
`;

export const LinkBox = styled.div`
  width: 100%;
  height: 530px;
  ${props => props.theme.variables.flex('column', 'center')};
`;

export const LinkBoxDetail = styled.div`
  width: 100%;
  height: 300px;
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')};
`;

export const LinkGuide = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  text-align: center;
`;

export const LinkP = styled.p`
  text-align: center;
  padding-top: 10px;
  width: 400px;
  height: 40px;
  border: 1px solid black;
  font-size: 20px;
  margin-top: 30px;
`;

export const ButtonDetail = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex()};
`;

export const CopyButton = styled.button`
  width: 100px;
  height: 60px;
  margin: 0 20px 0 20px;
  background-color: #2087c9;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  font-size: ${props => props.theme.style.smallFont};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
