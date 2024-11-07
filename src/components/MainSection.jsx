import {Routes, Route} from "react-router-dom";
import Blue from "./Blue";
import Red from './Red'; 
import Yellow from './Yellow'; 
import Purple from './Purple'; 
import Home from './Home'

export default function MainSection() {
    return (
        <div id="main-section">
            {/* routes here */}
            <Routes>
                <Route path="/blue" element={<Blue/>} />
                <Route path="/red" element={<Red/>} />
                <Route path="/yellow" element={<Yellow/>} />
                <Route path="/purple" element={<Purple/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}
