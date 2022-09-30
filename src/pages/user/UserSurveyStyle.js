import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: auto;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  z-index: 0;
`;

export const SurveyBox = styled.div`
  width: 770px;
  z-index: 1;
  height: 100%;
  margin-top: 100px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #ddd;
`;

export const Survey = styled.div`
  width: 770px;
  height: 1000px;
  z-index: 3;
`;

export const Title = styled.div`
  height: 200px;
  ${props => props.theme.variables.flex()};
  font-size: ${props => props.theme.style.bigFont};
`;

export const Period = styled.div`
  font-size: ${props => props.theme.style.smallFont};
  margin-bottom: 50px;
`;
