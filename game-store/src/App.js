import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Header} from "./components/header";
import {HomePage} from "./pages/home-page";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <HomePage/>

            <Outlet/>
        </div>
    );
};

export default App;