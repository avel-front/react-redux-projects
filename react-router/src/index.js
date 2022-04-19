import ReactDOM from "react-dom/client"
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Invoices, {Invoice} from "./routes/invoices";
import Expenses from "./routes/expenses";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="invoices" element={<Invoices/>}>
                    <Route path=":invoiceId" element={<Invoice/>} />
                </Route>
                <Route path="expenses" element={<Expenses/>}/>
                <Route
                    path="*"
                    element={
                    <main>
                        There's nothing here!
                    </main>
                    }
                />

            </Route>
        </Routes>
    </BrowserRouter>
)