import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
    {
        name: "musinsa",
        text: "무신사",
        fseq: "1",
        nameSeq: "1",
        priceSeq: "2",
    },
    {
        name: "WConcept",
        text: "더블유컨셉",
        fseq: "2",
        nameSeq: "8",
        priceSeq: "9",
    },
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 80%;
    margin: 0 auto;
    @media screen and(max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 3rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    ${props => 
        props.active && css`
            font-weight: 600;
            border-bottom: 1rem solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
        `
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({category, onSelect}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category 
                    key={c.name}
                    active={category.name === c.name}
                    onClick={() => onSelect(c)}>
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories;