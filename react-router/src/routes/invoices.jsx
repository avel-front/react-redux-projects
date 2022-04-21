import React from 'react';
import {getInvoices} from "../data";
import {Link, NavLink, Outlet, useSearchParams} from "react-router-dom";
import QueryNavLink from "../QueryNavLink";

const Invoices = () => {
    let invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <div style={{ display: "flex" }}>
           <nav style={{ padding: "1rem", borderRight: "1px solid" }}>

               <input
                   style={{ marginBottom: "1rem" }}
                value={searchParams.get("filter") || ""}
                onChange={(e) => {
                    let filter = e.target.value;
                    if (filter) {
                         setSearchParams({filter})
                    } else {
                         setSearchParams({})
                    }
                }}
               />

               {invoices

                   .filter((invoice) => {
                       let filter = searchParams.get("filter");
                       if (!filter) return true;
                       let name = invoice.name.toLowerCase();
                       return name.startsWith(filter.toLowerCase());
                   })

                   .map(invoice => (
                   <QueryNavLink
                   style={({isActive}) => ({
                       display: "block",
                       paddingBottom: "0.5rem",
                       color: isActive ? "red" : ""
                   })}
                   to={`/invoices/${invoice.number}`}
                   key={invoice.number}
                   >
                       {invoice.name}
                   </QueryNavLink>
               ))}
           </nav>
            <Outlet/>
        </div>
    );
};

export default Invoices;