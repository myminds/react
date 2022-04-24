import { MdOutlineNotificationsNone } from 'react-icons/md'
const Header = () => {

  
    return <div id='header' className="imgWhite p-1" >
        <p className="textc">Noida, Uttar Pradesh</p>
        <div className="d-flex">
            <input className="form-control"></input>
            <MdOutlineNotificationsNone size="30"></MdOutlineNotificationsNone>
        </div>
    </div>
}
export default Header