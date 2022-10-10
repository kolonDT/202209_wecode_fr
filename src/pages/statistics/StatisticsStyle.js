import styled from 'styled-components';

// StatisticsPage Style

export const Layout = styled.div`
  width: 1190px;
  height: 100%;
  margin-top: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SurveyDescription = styled.div`
  height: auto;
`;

export const Title = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 70px;
  background-color: #4087c9;
  opacity: 0.8;
  color: #ffffff;
  box-shadow: 0 0 5px rgb(50 50 50 / 30%);
  ${props => props.theme.variables.flex()}
  font-size: ${props => props.theme.style.bigFont};
  border-radius: 5.5px;
`;

export const Name = styled.div`
  margin-top: 100px;
  font-size: ${props => props.theme.style.bigFont};
`;

export const SurveyInfo = styled.div`
  width: 930px;
  height: 100px;
  margin: 250px 0 60px 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  background-color: aliceblue;
  font-size: 20px;
  padding-left: 10px;
  &:hover {
    box-shadow: 0 0 10px rgb(50 50 50 / 30%);
    border-radius: 15px;
    font-weight: 500;
  }
`;

export const Period = styled.div`
  margin-bottom: 3px;
`;

export const Participant = styled.div`
  margin-bottom: 3px;
`;

export const StatisticsBox = styled.div`
  margin-bottom: 200px;
`;

export const ButtonBox = styled.div`
  height: 200px;
`;

export const Phone = styled.div``;

//MultipleLists Style

export const MultipleLists = styled.div`
  width: 100%;
  margin-bottom: 50px;
  height: auto;
`;

export const MultipleLayout = styled.div`
  min-height: 300px;
  margin: 20px 100px 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  padding: 0 30px 0 30px;
  &:hover {
    box-shadow: 0 0 10px rgb(50 50 50 / 30%);
    border-radius: 15px;
    font-weight: 500;
  }
`;

export const Num = styled.div`
  ${props => props.theme.variables.flex('center', 'flex-start', 'center')};
  /* font-size: ${props => props.theme.style.middleFont}; */
  width: 930px;
  height: 40px;
  margin-top: 20px;
  border: 1px solid black;
  text-align: start;
  background-color: #4087c9;
  opacity: 0.7;
  color: #ffffff;
  border: none;
  border-radius: 5.5px;
  border-bottom: none;
  font-size: 22px;
`;

export const Id = styled.div`
  ${props => props.theme.variables.flex('center', 'center', 'flex-start')};
  width: 30px;
  height: 30px;
  margin: 0 20px 0 20px;
  background-color: white;
  border-radius: 5px;
  color: #4087c9;
  font-weight: 700;
  font-size: ${props => props.theme.style.bigFont};
`;

export const Answer = styled.div`
  height: auto;
  width: 930px;
  background: linear-gradient(aliceblue, white);
  margin-top: 20px;
  border-radius: 20px;
`;

export const Chart = styled.div`
  height: auto;
  margin-bottom: 30px;
  ${props => props.theme.variables.flex()};
`;

export const GotoMainButton = styled.div`
  ${props => props.theme.variables.flex()};
  width: 100px;
  height: 60px;
  margin: 200px 0 200px 900px;
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
export const SubjectiveListLayout = styled.div`
  min-height: 1px;
`;
export const SubjectiveLayout = styled(MultipleLayout)``;

export const Question = styled.div``;

export const Answers = styled.div`
  font-size: 17px;
  margin-top: 3px;
`;

// 핸드폰 번호

export const PhoneList = styled(MultipleLayout)`
  margin-top: 150px;
`;
export const PhoneText = styled(Num)`
  justify-content: center;
  font-weight: 500;
`;

export const PhoneNums = styled.div``;

export const PhoneNum = styled(Answer)``;
