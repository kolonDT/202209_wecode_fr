import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 8;
`;

export const ModalSize = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 320px;
  border-radius: 15px;
  box-shadow: 1px 1px 3px #ddd;
  background-color: #fafafa;
  &:hover {
    box-shadow: 0 0 10px rgb(50 50 50 / 30%);
  }
  z-index: 10;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #4a5168;
`;

export const TemplateSelect = styled.div`
  width: 100%;
`;

export const Template = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 25px 0 25px;
`;

export const NewTemplateBox = styled.div`
  width: 150px;
  height: 180px;
  font-size: 20px;
  border-radius: 7px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    box-shadow: 1px 1px 20px #ddd;
    opacity: 1;
  }
`;

export const NewTemplateTitle = styled.div`
  margin-top: 3px;
  font-size: 17px;
  text-align: center;
  color: #4a5568;
  font-weight: 500;
`;

export const NewTemplate = styled.img`
  width: 150px;
  height: 150px;
`;

// export const CustomerOpinionSurvey = styled(NewTemplate)``;
// export const InformationSurvey = styled(NewTemplate)``;
// export const SatisfactionSurvey = styled(NewTemplate)``;
