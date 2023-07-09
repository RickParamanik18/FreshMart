import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
}

export default App;
