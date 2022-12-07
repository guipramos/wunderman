import { Routes, Route } from "react-router-dom";
import {Home} from "./page/Home";
import { Details } from "./page/Details";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flag/:flagId" element={<Details />} />
        </Routes>
    );
}