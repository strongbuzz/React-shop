import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Single from "./pages/Single";

export default function App() {
    return (
        <div className="wrapper bg-dark text-white">
            <Navbar title="React Shop" />
            <div className="container mt-5 py-5 px-3 px-md-5">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/single/:id" element={<Single />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </div>
        </div>
    );
}
