import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
// import Login from "./pages/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const About = () => {
//   return <div>About</div>
// }


