import React from 'react';
import {BrowserRouter, Routes, Outlet, Route} from "react-router-dom";
import {Header} from "./components/header";
import {Provider} from "react-redux";
import {store} from "./redux";
import {HomePage} from "./pages/home-page";
import {GamePage} from "./pages/game-page";
import {OrderPage} from "./pages/order-page";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>

                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/app/:title" element={<GamePage/>}/>
                        <Route path="/order/" element={<OrderPage/>}/>
                        <Route
                            path="*"
                            element={
                                <div>
                                    <p>Page not found :(</p>
                                </div>
                            }
                        />
                    </Routes>

                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;