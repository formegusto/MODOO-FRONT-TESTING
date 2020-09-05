import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ClothesItem from './ClothesItem';
import axios from 'axios';

const InputItemBlock = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    input {
        border: 1px solid black;
        border-radius: 1rem;
        font-size: 1.5rem;
    }
    button {
        border: 1px solid black;
        border-radius: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

const ClothesListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    flex: 1;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;



const ClothesList = ({fseq}) => {
    const [seq, setSeq] = useState(fseq);
    const [nameVal, setNameVal] = useState('');
    const [priceVal, setPriceVal] = useState('');
    const [names, setNames] = useState(null);
    const [prices, setPrices] = useState(null);
    const [loading, setLoading] = useState(false);

    const postChange = useCallback(e => {
        if(e.target.name === "name") {
            setNameVal(e.target.value);
        } else {
            setPriceVal(e.target.value);
        }
    });

    const postClick = async () => {
        try {
            const data = [];
            data.push(nameVal);
            data.push(priceVal);

            const res = await axios.post(
                "http://localhost:9090/"
                + "api/frame",
                {
                    "apikey" : "BggJUgfMYVCfO42glOdu1iDeSdCrR3WQ",
                    "seq" : seq,
                    "data" : data,
                },
            );
            console.log(res.data);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get(
                    "http://localhost:9090/"
                    + "api/frame?"
                    + "apikey=BggJUgfMYVCfO42glOdu1iDeSdCrR3WQ"
                    + "&seq=" + seq 
                );
                
                const infolist = res.data.infolist;

                infolist.map(info => {
                    if(info.field === "옷이름") {
                        setNames(info.datalist);
                    } else {
                        setPrices(info.datalist);
                    }
                });

                console.log(res.data);
            } catch(e) {
                console.log(e);
                console.log(e.data);
            };
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading) {
        return <ClothesListBlock>대기 중...</ClothesListBlock>;
    }

    if(!names || !prices) {
        return <ClothesListBlock>데이터 요청 실패!</ClothesListBlock>;
    }

    return (
        <ClothesListBlock>
            <InputItemBlock>
                <input type="text" placeholder="옷이름" name="name" value={nameVal} onChange={postChange}></input>
                <input type="text" placeholder="옷가격" name="price" value={priceVal} onChange={postChange}></input>
                <button type="text" onClick={postClick}>넣기</button>
            </InputItemBlock>
            {names.map((name, index) => (
                <ClothesItem key={index} name={name} price={prices[index]}/>
            ))}
        </ClothesListBlock>
    );
};

export default ClothesList;