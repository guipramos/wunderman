import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header/Header";
import { BsArrowLeft } from "react-icons/bs";

import './style.scss'

export function Flag(props){

    const {name} = useParams();

    console.log("o NOME QUE VEM DO PARAMS", name);

    const [item, setItem] = useState([]);

	useEffect(() => {
		axios.get(`https://wtt-countries.herokuapp.com/countries?name=${name}`)
            .then((response) => {
                setItem(response.data);
            })
	}, [name]);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="result__card">
                        <a href="/" className="result__card--btnBack"><BsArrowLeft/>Back</a>
                        {item.map((items, index) =>
                            <div className="result__card--item" key={index}>
                                <div className="result__card--img">
                                    <img src={items.flag} alt={items.name} />
                                </div>
                                <div className="result__card--info">
                                    <h2 className="result__card--title">{items.name}</h2>
                                        <div className="result__card__content">
                                            <span><strong>Native Name:</strong> {items.name}</span>
                                            <span><strong>Population:</strong> {items.population}</span>
                                            <span><strong>Region:</strong> {items.neighbours}</span>
                                            <span><strong>Capital:</strong> {items.capital}</span>
                                            <span><strong>Top Love Domain:</strong> {items.tld}</span>
                                            <span><strong>Currencies:</strong> {items.currency_name}</span>
                                            <span><strong>Languages:</strong> {items.languages}</span>
                                        </div>
                                </div>
                            </div>
                         )}	
                    </div>
                </div>
            </main>
		</>
    );
}