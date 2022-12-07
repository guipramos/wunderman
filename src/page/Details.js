import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Header } from "../components/Header/Header";
import { BsArrowLeft } from "react-icons/bs";

import './style.scss'

export function Details(props){
    const [flag, setFlag] = useState([])
 
    const flagId = useParams();
    console.log(props);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${flag}`)
            .then(response => {
                setFlag(response.data)
                console.log(response.data)
            })
    }, [flag]);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="result__card">
                        <a href="/" className="result__card--btnBack"><BsArrowLeft/>Back</a>
                            <div className="result__card--item" >
                                <div className="result__card--img">
                                    <img src="https://flagcdn.com/aw.svg" alt="Aruba" />
                                </div>
                                <div className="result__card--info">
                                    <h2 className="result__card--title"></h2>
                                        <div className="result__card__content">
                                            <span><strong>Native Name:</strong></span>
                                            <span><strong>Population:</strong></span>
                                            <span><strong>Region:</strong> </span>
                                            <span><strong>Capital:</strong></span>
                                            <span><strong>Top Love Domain:</strong></span>
                                            <span><strong>Currencies:</strong></span>
                                            <span><strong>Languages:</strong></span>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </main>
		</>
    );
}