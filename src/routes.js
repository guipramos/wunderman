import { Routes, Route } from "react-router-dom";
import {Home} from "./page/Home";
import { Flag } from "./page/Flag";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flag/:name" element={<Flag />} />
        </Routes>
    );
}