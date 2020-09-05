import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClothesItem from './ClothesItem';
import axios from 'axios';

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

const ClothesList = () => {
    const [names, setNames] = useState(null);
    const [prices, setPrices] = useState(null);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get(
                    "http://localhost:9090/"
                    + "api/frame?"
                    + "apikey=BggJUgfMYVCfO42glOdu1iDeSdCrR3WQ"
                    + "&seq=1" 
                );
                
                const infolist = res.data.infolist;

                infolist.map(info => {
                    if(info.field === "옷이름") {
                        setNames(info.datalist);
                    } else {
                        setPrices(info.datalist);
                    }
                });
            } catch(e) {
                console.log(e);
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
            {names.map((name, index) => (
                <ClothesItem key={index} name={name} price={prices[index]} />
            ))}
        </ClothesListBlock>
    );
};

export default ClothesList;