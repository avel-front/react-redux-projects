import React from 'react';
import {Outlet} from "react-router-dom";

const Expenses = () => {
    return (
        <div>
            <nav>
                <h2>Expenses</h2>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Expenses;