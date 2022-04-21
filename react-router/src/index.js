import ReactDOM from "react-dom/client"
import App from "./App";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="invoices" element={<Invoices/>}>
                    <Route path=":invoiceId" element={<Invoice/>} />
                    <Route
                    index
                    element={
                        <main style={{ padding: "1rem" }}>
                            <h2>Select an invoice!</h2>
                        </main>
                    }
                    />
                </Route>
                <Route path="expenses" element={<Expenses/>}>
                <Route
                index
                element={
                    <main>
                        <h2>Select an expenses!</h2>
                    </main>
                }
                />
                </Route>
                <Route
                path="*"
                element={
                    <main>
                        <h2>There's nothing here!</h2>
                    </main>
                }
                />
            </Route>
        </Routes>
    </BrowserRouter>
)