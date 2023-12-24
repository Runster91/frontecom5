import React from "react";
import reve2 from "../assets/reve2.jpg"
import { Link } from "react-router-dom";
import { RiShieldUserFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";


const App = () => {
    const [showMenu,setShowMenu] = useState(false);
    const userData = useSelector((state) => state.user)
    console.log(userData)
    const dispatch = useDispatch
    const handleShowMenu =()=>{
        setShowMenu(preve => !preve)
    }

    const handleLogout = () => {
        dispatch(logoutRedux())
        toast("Logout succesfully")
    }
    return(
        <header className="fixed shdow-md w-full bg-black h-16 px-2 md:px-5 z-50">
            {/* desktop */}
            <div className="flex item-center h-full justify-between" >
                    <Link to={""}>
                    <div className="h-15">
                        <img src={reve2}className="h-14" />
                    </div>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-7">
                    <nav className="flex gap-4 md:gap-6 text-red-500 text-base md:text-lg">
                        <Link to={""} className="hover:bg-orange-600 hover:text-red-50">Home</Link>
                        <Link to={"menu"} className="hover:bg-orange-600 hover:text-red-50">Menu</Link>
                        <Link to={"about"} className="hover:bg-orange-600 hover:text-red-50">About</Link>
                        <Link to={"contact"} className="hover:bg-orange-600 hover:text-red-50">Contact</Link>

                    </nav>

                    
                        
                        <div className="text-2x1  text-red-500 relative hover:bg-orange-600 hover:text-red-50 transform hover:scale-105 transition-transform duration-300">
                        <IoCartOutline />
                        <div className="absolute -top-2 -right-2 text-red-100 bg-white-500 h-4 w-4 rounded-full m-0 p-0 text-base text-center">0</div>
                        </div>
                        <div className="text-2x1 text-red-500 ">
                        <div className="">
                        
                        <div className="text-4xl border-2 border-solid border-gold-600 p-2 rounded-full hover:bg-orange-600 hover:text-red-50" onClick={handleShowMenu} >            
                        
                       {userData?.image ?  <img src={userData.image} alt="User Image" /> : <RiShieldUserFill />}
                        
                        
                        </div > 
                        {
                            showMenu && (<div className="absolute right-2 bg-black py-2 px-2 drop-shadow-md flex flex-col justify-center text-center ">
                            <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer hover:bg-orange-600 hover:text-red-50 ">Make your  own</Link>
                            <Link to={"logout"} className="whitespace-nowrap cursor-pointer hover:bg-orange-600 hover:text-red-50 " onClick={handleLogout} >Logout</Link>    
                            <Link to={"login"} className="whitespace-nowrap cursor-pointer hover:bg-orange-600 hover:text-red-50 ">Login</Link>                          
                        </div>)
                        }
                        
                        
                        </div>

                    

                    </div>
                    

                    

                </div>
            {/* mobile */}
            </div>
        </header>
    );
}

export default App; // Export the component directly without wrapping it in an object
