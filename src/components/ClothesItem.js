import React from 'react';
import styled from 'styled-components';
import { AiOutlineAliwangwang } from 'react-icons/ai';

const ClothesItemBlock = styled.div `
    display: flex;
    flex-flow: column;
    .btnGrp {
        display: flex;
        justify-content: flex-end;
        background: #495057;
        border: none;
        outline: none;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        margin-bottom: .25rem;
        button {
            background: #868e96;
            color: white;
            outline: none;
            border: none;
            font-size: 2rem;
            border-top-right-radius: 1rem;
            cursor: pointer;
            padding-bottom: .25rem;
            padding-top: .25rem;
            padding-left: .5rem;
            padding-right: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .3s ease-in;
            &:hover {
                background: #adb5bd;
            }
        }
    }
    .contents {
        h2 {
            margin: 0;
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const ClothesItem = ({idx, name, price, delClick}) => {
    return (
        <ClothesItemBlock>
            <div className="btnGrp">
                <button type="button" onClick={() => delClick(idx)}>
                    <AiOutlineAliwangwang/>
                </button>
            </div>
            <div className="contents">
                <h2>
                    {name}
                </h2>
                <p>{price}</p>
            </div>
        </ClothesItemBlock>
    );
};

export default ClothesItem;