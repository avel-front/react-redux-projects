import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Header} from "./components/header";
import {Provider} from "react-redux";
import {store} from "./redux";

const App = () => {
    return (
     <Provider store={store}>
         <div className="App">
             <Header/>

             <Outlet/>
         </div>
     </Provider>
    );
};

export default App;