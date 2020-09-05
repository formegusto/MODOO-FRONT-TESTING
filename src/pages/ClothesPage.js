import React from 'react';
import Categories from '../components/Catagories';
import FrameClothesList from '../components/FrameClothesList';
import InfoClothesList from '../components/InfoClithesList';
import styled from 'styled-components';

const ListBlock = styled.div `
    display: flex;
`;

const categories = [
    {
        name: 'musinsa',
        text: '무신사',
        fseq: '1',
        nameSeq: '1',
        priceSeq: '2',
    },
    {
        name: 'WConcept',
        text: '더블유컨셉',
        fseq: '2',
        nameSeq: '8',
        priceSeq: '9',
    },
]

const ClothesPage = ({match}) => {
    const category = match.params.category ? 
        categories.find(c => (
            c.name === match.params.category
        )) : 
        categories.find(c => (
            c.name === 'musinsa'
        ));
    
      return (
        <>
            <>
                <Categories categories={categories}></Categories>
            </>
            <ListBlock>
                <FrameClothesList category={category}/>
                <InfoClothesList category={category}/>
            </ListBlock>
        </>
      )
}

export default ClothesPage;