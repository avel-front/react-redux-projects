import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home-page";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<HomePage/>}/>


                <Route
                    path="*"
                    element={
                        <div>
                            <p>Page not found :(</p>
                        </div>
                    }
                />

            </Route>
        </Routes>
    </BrowserRouter>
);

