import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
// import Login from "./pages/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import { useEffect, useState } from "react";
function App() {
  const [splace, setSplace] = useState(true)
  useEffect(()=>{
     setTimeout(()=>{
       setSplace(false)
     },2000)
  },[])
  return (
    <div className="App">
      {splace ?
        <div className="first-space-screen">
         <div className="splace">Welcome</div> 
        </div> :
        <BrowserRouter>
          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
          </Routes> */}

<Routes>
      <Route path="invoices" >
        <Route index element={<Invoices />} />

        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
        </BrowserRouter>}
    </div>
  );
}

export default App;

const MainRoutes = () => {
  return <Routes>
    {/* <Route path="/" element={<Home />}></Route> */}
    <Route path="about" element={<About />} />
  </Routes>
}

function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}

function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}