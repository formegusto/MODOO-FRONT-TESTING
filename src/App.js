import React, { useState, useCallback } from 'react';
import FrameClothesList from './components/FrameClothesList';
import InfoClothesList from './components/InfoClithesList';
import styled from 'styled-components';
import Categories from './components/Catagories';

const ListBlock = styled.div `
    display: flex;
`;

const App = () => {
  const [category, setCategory] = useState({
    name: "musinsa",
    text: "무신사",
    fseq: "1",
    nameSeq: "1",
    priceSeq: "2",
  });
  const onSelect = useCallback(category => {
    setCategory(category)
  }, []);

  return (
    <>
      <>
        <Categories category={category} onSelect={onSelect}></Categories>
      </>
      <ListBlock>
        <FrameClothesList category={category}/>
        <InfoClothesList category={category}/>
      </ListBlock>
    </>
  )
};

export default App;