import React from 'react';
import styled from 'styled-components';
import { DROPBOXMENU } from '../pages/main/Main';

const DropBox = ({ togo }) => {
  return (
    <Layout>
      {DROPBOXMENU.map(dropBox => {
        return (
          <Dropbox key={dropBox.id} value={dropBox.name} onClick={e => togo(e)}>
            {dropBox.name}
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
  z-index: 10;
`;
const Dropbox = styled.button`
  width: 100%;
  height: 60px;
  font-size: ${props => props.theme.style.smallFont};
  ${props => props.theme.variables.flex('center', 'center', 'center')};
  &:hover {
    box-shadow: 0 0 10px rgb(50 50 50 / 30%);
    border-radius: 15px;
    font-weight: 600;
  }
`;

export default DropBox;
