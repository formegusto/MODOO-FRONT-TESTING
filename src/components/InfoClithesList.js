import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ClothesItem from './ClothesItem';
import axios from 'axios';

const InputItemBlock = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    .inputGrp {
        display: flex;
        input {
            flex: 4;
            border: 1px solid black;
            border-radius: 1rem;
            font-size: 1.5rem;
        }
        button {
            flex: 1;
            border: 1px solid black;
            border-radius: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
`;

const ClothesListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const InfoClothesList = ({category}) => {
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
    }, []);

    const postClick = async (e) => {
        let seq;
        let data = [];

        if(e.target.name === "name"){
            seq = category.nameSeq;
            data.push(nameVal);
        } else {
            seq = category.priceSeq;
            data.push(priceVal);
        }

        try {
            const res = await axios.post(
                "http://localhost:9090/"
                + "api/info",
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

    const delClick = async (type, idx) => {
        let seq;

        if(type === 'name') {
            seq = category.nameSeq;
        } else {
            seq = category.priceSeq;
        }

        try {
            const res = await axios.delete(
                "http://localhost:9090/"
                + "api/info?"
                + "apikey=BggJUgfMYVCfO42glOdu1iDeSdCrR3WQ"
                + "&seq=" + seq
                + "&idx=" + idx
            );

            console.log(res);

            if(type === 'name') {
                setNames(names.filter( (n,i) => idx !== i));
            } else {
                setPrices(prices.filter( (n,i) => idx !== i));
            }
        } catch(e) {
            console.log(e);
        }
        
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const nameRes = await axios.get(
                    "http://localhost:9090/"
                    + "api/info?"
                    + "apikey=BggJUgfMYVCfO42glOdu1iDeSdCrR3WQ"
                    + "&seq=" + category.nameSeq
                );
                setNames(nameRes.data.datalist);

                const priceRes = await axios.get(
                    "http://localhost:9090/"
                    + "api/info?"
                    + "apikey=BggJUgfMYVCfO42glOdu1iDeSdCrR3WQ"
                    + "&seq=" + category.priceSeq
                );
                setPrices(priceRes.data.datalist);
            } catch(e) {
                console.log(e);
            };
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if(loading) {
        return <ClothesListBlock>대기 중...</ClothesListBlock>;
    }

    if(!names || !prices) {
        return <ClothesListBlock>데이터 요청 실패!</ClothesListBlock>;
    }

    return (
        <ClothesListBlock>
            <InputItemBlock>
                <div className="inputGrp">
                    <input type="text" placeholder="옷이름" name="name" value={nameVal} onChange={postChange}></input> 
                    <button type="text" onClick={postClick} name="name">넣기</button>
                </div>
                <div className="inputGrp">
                    <input type="text" placeholder="옷가격" name="price" value={priceVal} onChange={postChange}></input>
                    <button type="text" onClick={postClick} name="click">넣기</button>
                </div>
            </InputItemBlock>
            {names.map((name, index) => (
                <ClothesItem key={index} idx={index} name={name} price={prices[index]} delClick={delClick} type="info"/>
            ))}
        </ClothesListBlock>
    );
};

export default InfoClothesList; 