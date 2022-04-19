import React from 'react';
import {getInvoice, getInvoices} from "../data";
import {Link, Outlet, useParams} from "react-router-dom";

const Invoices = () => {
    let invoices = getInvoices();

    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderRight: "1px solid", padding: "1rem" }}>
                {invoices.map(invoice => (
                    <Link
                        style={{ display: "block", padding: "5px" }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Outlet/>
        </div>
    );
};

export default Invoices;

export const Invoice = () => {
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10))

    return (
        <main style={{ padding:"1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>{invoice.name} : {invoice.number}</p>
            <h2>Due date: {invoice.due}</h2>
        </main>
    )
}