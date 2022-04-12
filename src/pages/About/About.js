import Menubar from "../../components/Menubar/Menubar"
import a1 from '../../assets/Images/2.jpg'
import { IoLocationOutline } from 'react-icons/io5'
import Header from "../../components/Header/Header"

const Home = () => {
    return <div className="">
        <div className="main-content-div">
           <Header />
            <div className="d-flex main-div-container">
                <div className="container-card">
                    <div className="card-imag">
                        <img src={a1} alt="" />
                    </div>
                    <div className="containt">
                        <h5 className="cardItem-rupee">₹ 16,500</h5>
                        <p className="cardItem-name">HERCULASH CYCLE</p>
                        <div><span className="d-flex"><IoLocationOutline></IoLocationOutline><p className="address">MUMBAI, MARASTRA</p></span></div>
                    </div>
                </div>
                <div className="container-card">
                    <div className="card-imag">
                        <img src={a1} alt=""  />
                    </div>
                    <div className="containt">
                        <h5 className="cardItem-rupee">₹ 16,500</h5>
                        <p className="cardItem-name">HERCULASH CYCLE</p>
                        <div><span className="d-flex"><IoLocationOutline></IoLocationOutline><p className="address">MUMBAI, MARASTRA</p></span></div>
                    </div>
                </div>
            </div>
         
        </div>
        <Menubar></Menubar>
    </div>
}
export default Home