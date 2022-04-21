import React from 'react';
import {Link, Outlet} from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Header title</h1>

            <nav style={{ borderBottom: "1px solid", paddingBottom: "0.5rem" }}>
                <Link to="/invoices">Invoices</Link> | {"  "}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default App;