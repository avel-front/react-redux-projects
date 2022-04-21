import React from 'react';
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {deleteInvoice, getInvoice} from "../data";

const Invoice = () => {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10 ));
    let navigate = useNavigate();
    let location = useLocation()

    return (
       <div style={{ padding: "1rem" }}>
         <main>
             <h2>Total Due: {invoice.amount}</h2>
             <p>{invoice.name}: {invoice.number}</p>
             <h2>Due Date: {invoice.due}</h2>
         </main>

           <p>
               <button
               onClick={() => {
                   deleteInvoice(invoice.number)
                   navigate("/invoices" + location.search)
               }}
               >
               Delete
               </button>
           </p>
       </div>


    );
};

export default Invoice;