import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { formListState } from '../store/store';

const OptionBox = ({ title, options, formNum, setFormNum }) => {
  const setFormList = useSetRecoilState(formListState);

  const clickOption = idx => {
    setFormNum(formNum + 1);
    setFormList(prev => ({
      surveyName: '',
      formData: [
        ...prev.formData,
        {
          id: formNum + 1,
          type: idx,
          question: '',
          options: [],
        },
      ],
    }));
  };

  return (
    <Options>
      <OptionTitle>
        {title}
        <OptionLine />
      </OptionTitle>
      {options.map((option, idx) => (
        <Option onClick={() => clickOption(idx + 1)} key={idx}>
          {option.title}
        </Option>
      ))}
    </Options>
  );
};

export default OptionBox;

const OptionTitle = styled.div`
  position: relative;
  margin-left: 30px;
  padding: 10px 10px;
  font-size: 13px;
  color: #999;
  background-color: #fff;
`;
const OptionLine = styled.span`
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
`;

const Options = styled.div`
  padding-top: 20px;
  font-size: ${props => props.theme.style.middleFont};
  font-weight: 500;
`;

const Option = styled.button`
  display: block;
  padding: 15px 20px;
  font-size: 13px;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.style.mainLine};
  }
`;
