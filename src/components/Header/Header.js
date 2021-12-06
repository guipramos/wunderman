import "./style.scss";

import { RiMoonLine } from 'react-icons/ri';


export function Header(){

    function handleThemeColor(){
        document.querySelector('body').classList.toggle("dark-mode");
    }


    return(
        <header className="header">
            <div className="container">
                <div className="top">
                    <h1 className="top__title">Where in the world?</h1>
                    <button  className="top__change__theme" onClick={handleThemeColor} ><RiMoonLine/><span>Dark Mode</span></button>
                </div>
            </div>
        </header>
    )
}