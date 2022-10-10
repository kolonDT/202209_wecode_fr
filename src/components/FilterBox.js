import { FILTERMENU } from '../pages/main/Main';
import styled from 'styled-components';

const FilterBox = ({ toFilter }) => {
  return (
    <Layout>
      {FILTERMENU.map(filterBox => {
        return (
          <Dropbox
            key={filterBox.id}
            value={filterBox.name}
            onClick={e => toFilter(e)}
          >
            {filterBox.name}
          </Dropbox>
        );
      })}
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 150px;
  height: auto;
  border-radius: 15px;
  box-shadow: 1px 1px 3px #ddd;
  background-color: #fafafa;
  opacity: 0.9;
  z-index: 20;
`;
const Dropbox = styled.button`
  width: 100%;
  height: 60px;
  /* position: relative; */
  z-index: 100;
  font-size: ${props => props.theme.style.smallFont};
  ${props => props.theme.variables.flex('center', 'center', 'center')};
  &:hover {
    box-shadow: 0 0 10px rgb(50 50 50 / 30%);
    border-radius: 15px;
    font-weight: 600;
  }
`;

export default FilterBox;
