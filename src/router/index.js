import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";

// import ScrollTop from "../Components/Scrolltop/ScrollTop";
const Router = () => {
    return (
        <BrowserRouter basename="/">
            {/* <ScrollTop /> */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;