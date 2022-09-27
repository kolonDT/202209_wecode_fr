import styled from 'styled-components';

export const Layout = styled.div`
  width: 1440px;
  height: 100%;
`;

export const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: bisque;
`;

export const LayoutCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled.p`
  font-size: 50px;
  font-weight: 700;
  color: #2087c9;
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginBox = styled.div`
  width: 700px;
  height: 700px;
  border: 1px #ababab solid;
  border-radius: 17px;
  &:hover {
    box-shadow: 1px 1px 20px #ddd;
  }
`;

export const LoginText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: black;
  margin: 140px 0 0 72px;
`;

export const LoginForm = styled.form`
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 70px 30px;
`;

export const LoginId = styled.input`
  width: 350px;
  height: 40px;
  border: solid 1px #cccccc;
  border-radius: 5px;
`;

export const LoginPassword = styled.input`
  width: 350px;
  height: 40px;
  border: solid 1px #cccccc;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  width: 350px;
  height: 40px;
  background-color: #2087c9;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
