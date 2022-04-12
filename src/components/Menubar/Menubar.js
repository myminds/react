import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsPlus, BsHeart } from 'react-icons/bs'
import { RiChat1Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const Menubar = () => {
    const navebar =useNavigate()
    return <div className="menubar-container imgWhite">
        <div><AiOutlineHome size="25" onClick={()=>navebar('/')}></AiOutlineHome></div>
        <div><RiChat1Line size="25"></RiChat1Line></div>
        <div className='middle-div'>
            <div className='middle-button'>
                <div className='level'>
                    <div className='level1'>
                        <BsPlus size="45"></BsPlus>
                    </div>
                </div>
            </div>
        </div>
        <div><BsHeart size="25"></BsHeart></div>
        <div><AiOutlineUser size="25" onClick={()=>navebar('/about')}></AiOutlineUser></div>
    </div>
}
export default Menubar