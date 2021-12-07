import "./style.scss";
import { CgSearch } from 'react-icons/cg';

export function Search({value, onChange}){
    function handleChange(e){
        onChange(e.target.value);
    }

    return (
        <>
            <div className="search">
                <input 
                    type="search" 
                    id="box" 
                    placeholder="Search for a country…" 
                    className="search__box"  
                    value={value}
                    onChange={handleChange} 
                />
                <CgSearch id="icon" />
            </div> 
        </>
    );
}