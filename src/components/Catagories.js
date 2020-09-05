import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Category = styled(NavLink)`
    font-size: 3rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    transition: .7s;

    &:hover {
        color: #22b8cf;
    }

    &.active {
        font-weight: 600;
        border-bottom: 1rem solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({categories}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category 
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === "musinsa"}
                    to={c.name === "musinsa" ? '/' : `/${c.name}`}>
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories;