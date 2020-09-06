import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineAliwangwang } from 'react-icons/ai';
import { MdSettings, MdDone } from 'react-icons/md';

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
        display: flex;
        flex-flow: column;
        h2 {
            margin: 0;
            button {
                margin-left: .5rem;
                background: white;
                outline: none;
                border: 1px solid transparent;
                border-radius: .5rem;
                font-size: 1rem;
                cursor: pointer;
                padding-top: .25rem;
                padding-bottom: .25rem;
                color: black;
                transition: .7s;

                &:hover {
                    color: #22b8cf;
                    border-color: #22b8cf;
                }
            }    
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
            button {
                margin-left: .5rem;
                background: white;
                outline: none;
                border: 1px solid transparent;
                border-radius: .5rem;
                font-size: 1rem;
                cursor: pointer;
                padding-top: .25rem;
                padding-bottom: .25rem;
                color: black;
                transition: .7s;

                &:hover {
                    color: #22b8cf;
                    border-color: #22b8cf;
                }
            }
        }
        input {
                border: 1px solid black;
                border-radius: 1rem;
                font-size: 1.5rem;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const ClothesItem = ({idx, name, price, delClick, type,upItem}) => {
    const [mode,setMode] = useState('read');
    const [upName, setUpName] = useState('');
    const [upPrice, setUpPrice] = useState('');

    const changeMode = (m) => {
        if(m === 'update') {
            setMode('update');
        } else {
            upItem(idx, upName, upPrice);
            (upName !== '') &&
                setUpName('');
            (upPrice !== '') &&
                setUpPrice('');
            setMode('read');
        }
    }

    const onChange = (e) => {
        if(e.target.name === 'name') {
            setUpName(e.target.value);
        } else {
            setUpPrice(e.target.value);
        }
    }

    return (
        <ClothesItemBlock>
                {type === "frame" &&  
                <div className="btnGrp">
                    { mode === 'read' ? 
                    <button type="button" onClick={() => changeMode('update')}>
                        <MdSettings/>
                    </button> :
                    <button type="button" onClick={() => changeMode('read')}>
                        <MdDone />
                    </button>
                    }  
                    <button type="button" onClick={() => delClick(idx)}>
                        <AiOutlineAliwangwang/>
                    </button>
                </div>
                } 
                <div className="contents">
                    {mode === 'read' ? 
                    <h2>
                        {name}
                        
                        {type === "info" &&  
                            <button type="button" className="toolBtn" onClick={() => delClick('name', idx)}>
                                <AiOutlineAliwangwang/>
                            </button>
                        }
                    </h2>
                    : 
                    <input type="text" name="name" value={upName} placeholder="옷이름" onChange={onChange}></input>
                    }
                    {mode === 'read' ?
                    <p>
                        {price}
                        {type === "info" &&  
                            <button type="button" className="toolBtn" onClick={() => delClick('price', idx)}>
                                <AiOutlineAliwangwang/>
                            </button>
                        }
                    </p>
                    : 
                    <input type="text" name="price" value={upPrice} placeholder="가격" onChange={onChange}></input>
                    }
                </div>
        </ClothesItemBlock>
    );
};

export default ClothesItem;