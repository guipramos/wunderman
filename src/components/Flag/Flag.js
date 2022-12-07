import { Link } from "react-router-dom";
import "./style.scss";

export function Flag(props){
    console.log("Props das props", props);
    return (
        <div className="flag__item">
            <div className="flag__item--img">
                <Link to={`/flag/${props.name}`}>
                    <img src={props.flag} alt="Flag" />
                </Link>
            </div>
            <div className="flag__item--info" key={props.name}>
                <h2 className="flag__item--title">{props.name}</h2>
                <span><strong>Population:</strong> {props.population}</span>
                <span><strong>Region:</strong> {props.name}</span>
                <span><strong>Capital:</strong> {props.capital}</span>
            </div>
        </div>
    );
}