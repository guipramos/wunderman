import { useRef } from "react";
import "./style.scss";

export function Filter({onChange}){
    const ref = useRef();

    function handleChange(){
        if(ref.current.value){
            onChange(ref.current.value);
        }else{
            alert("Nenhum continente encontrado!")
        }
    }

    return (
        <div className="filter">
            <form >
                <select ref={ref} onChange={handleChange} >
                    <option value="">Filter by Region</option>
                    <option value="Africa">África</option>
                    <option value="America">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceânia</option>
                </select> 
            </form>
        </div>

    );
}