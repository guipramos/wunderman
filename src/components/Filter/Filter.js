import { useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";

export function Filter(){

    const [filter, setFilter] = useState([]);

    useEffect(() => {
		axios.get(`https://wtt-countries.herokuapp.com/countries?continent=${filter}`)
            .then((response) => {
                setFilter(response.data);
            })
	}, [filter]);

    function handleChangeFilter(e){
        e.preventDefault();

        var filtrar = e.target.value;

        console.log("Filtrar", filtrar);
    }

    return (
        <div className="filter">
            <form >
                <select onChange={handleChangeFilter} >
                    <option value="hide">Filter by Region</option>
                    <option value="África">África</option>
                    <option value="América">América</option>
                    <option value="Ásia">Ásia</option>
                    <option value="Europa">Europa</option>
                    <option value="Oceânia">Oceânia</option>
                </select> 
            </form>
        </div>

    );
}