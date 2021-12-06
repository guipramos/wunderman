// import { useEffect, useState } from "react";
// import axios from "axios";

import { useRef } from "react";
import "./style.scss";

export function Filter({filterRes}){

    // const [filter, setFilter] = useState([]);

    const ref = useRef();

    console.log("Resposta do console", ref);

    function handleChange(){
        filterRes(ref.current.value);
    }

    return (
        <div className="filter">
            <form >
                <select ref={ref} onChange={handleChange} >
                    <option value="">Filter by Region</option>
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