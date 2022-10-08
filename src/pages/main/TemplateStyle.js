import styled from 'styled-components';

export const Layout = styled.div`
  width: 1190px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
  border: 2px solid #cccccc;
  border-radius: 5.5px;
  background-color: ${({ disabled }) =>
    disabled ? 'rgba(0,0,0,0.10)' : 'none'};
  :hover {
    box-shadow: 2px 2px 5px 2px #dadce0;
  }
`;
export const TitleAndStateAndPeriod = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.div`
  max-width: 900px;
  height: 40px;
  margin-top: 10px;
  font-size: 18px;
  text-align: start;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export const StateAndPeriod = styled.div`
  display: flex;
`;

export const State = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 70%;
  text-align: center;
  margin-right: 20px;
`;

export const Period = styled.div`
  max-width: 900px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  margin-right: 40px;
`;

export const Participant = styled.div`
  width: 80px;
  height: 50px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: none;
  border-radius: 5.5px;
  background-color: #fffaf0;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const ResultButton = styled.div`
  width: 80px;
  height: 50px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2087c9;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5.5px;
  background-color: #fffaf0;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  &:disabled {
    background-color: #cccccc;
    :hover {
      opacity: 1;
    }
  }
`;
