import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { formListState, idState } from '../store/store';

const OptionBox = ({ title, options, setShowForm, showForm }) => {
  const setFormList = useSetRecoilState(formListState);
  const [plus, setPlus] = useRecoilState(idState);

  const getSequentialNum = () => {
    setPlus(prev => prev + 1);
  };

  const selectForm = idx => {
    getSequentialNum();
    setFormList(prev => [
      ...prev,
      {
        type: idx,
        id: plus,
      },
    ]);
    setShowForm(idx);
  };

  return (
    <Options>
      <OptionTitle>
        {title}
        <OptionLine />
      </OptionTitle>
      {options.map((option, idx) => (
        <Option onClick={() => selectForm(idx + 1)} key={idx}>
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
