import React from 'react'
import { useState } from 'react';
import { RiEye2Line } from "react-icons/ri";
import { GrFormViewHide } from "react-icons/gr";
import { Link } from 'react-router-dom';
import checkpoint from ".././assets/checkpoint.png"
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [showPassword,setshowPassword] = useState(false);
    
    const [data,setData]=useState({
         email: "",
        password: "",
       
    });
    const navigate = useNavigate()
    console.log(data)
     const handleshowPassword =()=>{
        setshowPassword(preve => !preve)
    }
    

    const handleOnChange = (e) => {
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const {email,password} = data
        if ( email && password){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`, {
                method: "POST",
                headers: {
                  "content-type" : "application/json"
                },
                body: JSON.stringify(data)
              });
              
              const dataRes = await fetchData.json();
              
              console.log(dataRes); 
              toast(dataRes.message)
              if(dataRes.alert){
                setTimeout(()=>{
                    navigate("/")
                },1000)
              }
                 
           
        } else{
            alert("Please enter required  fields")
        }
        
    }

  return (
    <div>
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-amber-600 m-auto flex items-center flex-col p-4 rounded'>
                <div className='bottom-0 h-1/3 bg-red-800 w-full text-center rounded-full justify-center items-center '>
                <img src={checkpoint} className='w-70 h-60 rounded-full drop-shadow-md shadow-md shadow-md m-auto py-1 bg-opacity-90'/>

                </div>
                

                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit} >
            
                <label htmlFor='email' className='text-2x1  text-red-50 p-2'>Email</label>
                <input type={"email"} id="email" name='email' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700 ' value={data.email} onChange={handleOnChange} ></input>
                <label htmlFor='password' className='text-2x1  text-red-50 p-2'> Password </label>
                <div className='flex mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700 border-none outline-none '>
                <input type={showPassword ? "text" : "password"} id="password" name='password' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-0 rounded outline-none focus-within:outline-orange-700' value={data.password} onChange={handleOnChange} ></input>
                <span className=' flex text-red-50' onClick={handleshowPassword}>{showPassword ? <RiEye2Line /> : <GrFormViewHide />}</span>
                </div>
                

                <button type="submit" className='mt-3 max-w[120px] w-full bg-red-800 item-center rounded-full border-orange-700 text-white text-xl font-medium text-center py-1'>Login</button>
                
            </form>
            <p className='p-2 text-red-50 mt-2'>Don't have account ? <Link to="/signup" className='hover:text-red-800'>Sign up</Link></p>

            </div>
           
        </div>
    </div>
  )
}

export default Login