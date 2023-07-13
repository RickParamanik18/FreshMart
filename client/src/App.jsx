import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { Homepage } from "./pages/homepage/Homepage";
import { Footer } from "./components/footer/Footer";
import { SpecificProduct } from "./pages/specificProduct/SpecificProduct";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    path="/product/:productId"
                    element={<SpecificProduct />}
                />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
