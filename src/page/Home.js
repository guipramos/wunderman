import { Header } from "../components/Header/Header"; 
import { Search } from "../components/Search/Search"; 
import { Filter } from "../components/Filter/Filter"; 
import { Flag } from "../components/Flag/Flag"; 
import { useEffect, useState } from "react";
import axios from "axios";

export function Home(){

    const [flag, setFlag] = useState([]);
    const [searchResult, setSearchResult] = useState('');

	useEffect(() => {
        if(searchResult === ""){
            axios.get(`https://wtt-countries.herokuapp.com/countries`)
            .then((response) => {
                setFlag(response.data);
            })
        }else{
            axios.get(`https://wtt-countries.herokuapp.com/countries?continent=${searchResult}`)
            .then((response) => {
                setFlag(response.data);
            })
        }
	}, [searchResult]);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="field__search">
                        <Search 
                            value={searchResult} 
                            onChange={(resultCard) => setSearchResult(resultCard)} 
                        />
                        <Filter 
                            onChange={(data) => setSearchResult(data)}
                        />
                    </div>
                    {flag && flag.length
                        ?   
                            <div className="flag">
                                {flag.map((item, index) =>
                                    <Flag flag={item.flag} name={item.name} population={item.population} region={item.name} capital={item.capital} key={index} />
                                )}	
                            </div>
                        :   <p>Não foi encontrado nenhum país</p>
                    }
                </div>
            </main>
		</>
    );
}