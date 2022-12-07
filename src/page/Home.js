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
            axios.get(`https://restcountries.com/v3.1/all`)
            .then((response) => {
                setFlag(response.data);
                console.log(response.data);
            })
        }else{
            axios.get(`https://restcountries.com/v3.1/name/${searchResult}`)
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
                                    <Flag flag={item.flags.png} name={item.name.common} population={item.population} region={item.name} capital={item.capital} key={index} />
                                )}	
                            </div>
                        :   <p>Não foi encontrado nenhum país</p>
                    }
                </div>
            </main>
		</>
    );
}