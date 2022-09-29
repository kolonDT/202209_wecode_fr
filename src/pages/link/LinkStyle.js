import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1190px;
  height: 100%;
  margin-top: 200px;
  text-align: center;
`;

export const DiscriptionBox = styled.div`
  height: 70px;
`;

export const Title = styled.div`
  font-size: ${props => props.theme.style.middleFont};
  font-weight: 700;
`;
export const LinkBox = styled.div`
  ${props => props.theme.variables.flex('column')};
  height: 530px;
`;

export const LinkBoxDetail = styled.div`
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')};
  width: 700px;
  height: 300px;
`;

export const LinkGuide = styled.div`
  height: 50px;
  font-size: 20px;
`;

export const LinkInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  margin-top: 30px;
`;

export const CopyButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: #2087c9;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  font-size: ${props => props.theme.style.smallFont};
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
