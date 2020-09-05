import React from 'react';
import FrameClothesList from './components/FrameClothesList';
import InfoClothesList from './components/InfoClithesList';
import styled from 'styled-components';

const ListBlock = styled.div `
    display: flex;
`;

const App = () => {
  return (
    <ListBlock>
      <FrameClothesList fseq="1"/>
      <InfoClothesList nameSeq="1" priceSeq="2"/>
    </ListBlock>
  )
};

export default App;