import React from 'react';
import styled from 'styled-components';

const ClothesItemBlock = styled.div `
    display: flex;
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

const ClothesItem = ({name, price}) => {
    return (
        <ClothesItemBlock>
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