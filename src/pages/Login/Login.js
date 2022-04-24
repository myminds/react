import { BsPhone } from "react-icons/bs"
import { IoMdLogIn } from "react-icons/io"

const Login = (props) => {

   const onChange=(e)=>{
    const {value} =e.target
    if(value.length === 10){
       props.login()
    }
   }

   return <div className="first-space-screen text-center">
      <div className="splace">
         <div>
            <div className="logo">
               <BsPhone className="logo-svg"></BsPhone>
               <div className="mb-5">Login</div>
               <div className="login-mob">
                  <BsPhone ></BsPhone>
                  <input onChange={onChange} placeholder="Mobile Number"></input>
               </div>
               <div className="login-line"></div>
           
            </div>
         </div>
         <div className="login-bottom"></div>
      </div>
   </div>
}
export default Login