import React from "react";
import reve2 from "../assets/reve2.jpg"
import { Link } from "react-router-dom";
import { RiShieldUserFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Login from "../pages/Login";


const App = () => {
    const [showMenu,setShowMenu] = useState(false);
    const handleShowMenu =()=>{
        setShowMenu(preve => !preve)
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
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>

                    </nav>

                    
                        
                        <div className="text-2x1  text-red-500 relative">
                        <IoCartOutline />
                        <div className="absolute -top-2 -right-2 text-red-100 bg-white-500 h-4 w-4 rounded-full m-0 p-0 text-base text-center">0</div>
                        </div>
                        <div className="text-2x1 text-red-500 ">
                        <div className="">
                        
                        <div className="text-4xl border-2 border-solid border-gold-600 p-2 rounded-full" onClick={handleShowMenu} >
                        <RiShieldUserFill />
                        </div>
                        
                        </div > 
                        {
                            showMenu && (<div className="absolute right-2 bg-black py-2 px-2 drop-shadow-md flex flex-col">
                            <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">NewProduct</Link>
                            <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>                          
                        </div>)
                        }
                        
                        
                        </div>

                    

                    </div>
                    

                    

                </div>
            {/* mobile */}
        </header>
    );
}

export default App; // Export the component directly without wrapping it in an object
