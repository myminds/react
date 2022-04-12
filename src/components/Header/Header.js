import { MdOutlineNotificationsNone } from 'react-icons/md'
const Header = () => {

  
    return <div id='header' className=" p-1" >
        <p>Noida, Uttar Pradesh</p>
        <div className="d-flex imgWhite">
            <input className="form-control"></input>
            <MdOutlineNotificationsNone size="30"></MdOutlineNotificationsNone>
        </div>
    </div>
}
export default Header