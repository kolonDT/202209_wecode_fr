import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Layout = styled.div`
  width: 1190px;
  height: 100%;
  margin-top: 200px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Filter = styled.div`
  width: 1190px;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StateAndPeriod = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
`;

export const State = styled.div`
  width: 100px;
  height: auto;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export const Period = styled.div`
  width: 150px;
  height: auto;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export const SearchTemplate = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4px;
  margin-right: 100px;
`;

export const SearchImg = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 40px;
  margin-left: 20px;
  outline: none;
  border: none;
  border-bottom: solid 1px #cccccc;
  font-size: 17px;
`;

export const SearchButton = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 4px;
  margin-left: 20px;
  background-color: #2087c9;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const TemplateListBox = styled.div`
  width: 100%;
  height: auto;
`;

export const TemplateList = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const pagination = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const PreButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  color: #2087c9;
  background-color: #ffff;
  font-size: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const NextButton = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 23px;
  border: none;
  color: #2087c9;
  background-color: #ffff;
  font-size: 27px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Page = styled.div`
  font-size: 30px;
`;

export const PageinationNum = styled.div`
  width: 10px;
  height: 10px;
  font-size: 25px;
  margin: 12px 0 0 10px;
  cursor: pointer;
  :hover {
    opacity: 0.3;
  }
`;

export const Btn = styled.button`
  width: 100px;
  border: 1px solid black;
  background-color: aliceblue;
`;
