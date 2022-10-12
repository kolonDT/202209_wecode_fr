import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  min-height: 95vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
`;

export const SurveyForm = styled.div`
  width: 770px;
  margin-top: 50px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #ddd;
`;
export const Title = styled.div`
  padding: 30px 50px;
  ${props => props.theme.variables.flex()};
  font-size: ${props => props.theme.style.bigFont};
`;

export const Period = styled.div`
  font-size: ${props => props.theme.style.smallFont};
  margin-bottom: 50px;
`;
