import React from 'react';
import { useState } from 'react'; // Move this import to the top
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { RiEye2Line } from 'react-icons/ri';
import { GrFormViewHide } from 'react-icons/gr';
import { toast } from "react-hot-toast";

import toxedog from '../assets/toxedog.png';

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image : ""
  });
  
    const handleshowPassword = () => {
      setShowPassword((preve) => !preve);
    };
    const handleShowConfirmPassword = () => {
      setShowConfirmPassword((preve) => !preve);
    };
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((preve) => {
        return {
          ...preve,
          [name]: value,
        };
      });
    };
  
    const handleUploadProfileImage = async(e)=>{
        const data = await ImagetoBase64(e.target.files[0])
    
  
        setData((preve)=>{
            return{
              ...preve,
              image : data
            }
        })
  
    }
  console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit = async(e) => {
       e.preventDefault();
       const {firstName,email,password,confirmpassword} = data
       if(firstName && email && password && confirmpassword){
        if(password === confirmpassword){
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
            method: "POST",
            headers: {
              "content-type" : "application/json"
            },
            body: JSON.stringify(data)
          });
          
          const dataRes = await fetchData.json();
          
          console.log(dataRes);
          
          // alert(dataRes.message);
          toast(dataRes.message)
          if(dataRes.alert){
            navigate("/login")
          }
         
        }
        else{
            alert("password and confirm password not equal")
        }
       }
       else{
          alert("Please enter required fields")
       }
    };


  return (
    <div>
        <div className='p-3 md:p-4'>
            <div className='overflow-hidden w-full max-w-sm bg-amber-600 m-auto flex items-center flex-col p-4 rounded relative flex flex-col justify-center items-center'>
                <div className='  bottom-0 h-1/3 bg-red-800 w-full text-center rounded-full justify-center items-center bg-opacity-90'>
                <img src={data.image ? data.image : toxedog} className='w-70 h-60 rounded-full drop-shadow-md shadow-md shadow-md m-auto py-4 items-center'/>                                      
                <label htmlFor='profileImage'>
                    <div>
                    <p className='text-2x1  text-red-50 p-2 hover:text-amber-600 cursor-pointer'>Upload</p>
                    </div>
                    <input type={"file"} id='profileImage' accept="image/*" className='hidden' onChange={handleUploadProfileImage}/>
                </label>
                
               
                </div>

                <div>

                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit} >
                <label htmlFor='firstName' className='text-2x1  text-red-50 p-2'> First Name</label>
                <input type={"text"} id="firstName" name='firstName' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700' value={data.firstName} onChange={handleOnChange} ></input>
                <label htmlFor='lastName' className='text-2x1  text-red-50 p-2'> Last Name</label>
                <input type={"text"} id="lastName" name='lastName' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700' value={data.lastName} onChange={handleOnChange}  ></input>
                <label htmlFor='email' className='text-2x1  text-red-50 p-2'>Email</label>
                <input type={"email"} id="email" name='email' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700 ' value={data.email} onChange={handleOnChange} ></input>
                <label htmlFor='password' className='text-2x1  text-red-50 p-2'> Password </label>
                <div className='flex mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700 border-none outline-none '>
                <input type={showPassword ? "text" : "password"} id="password" name='password' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-0 rounded outline-none focus-within:outline-orange-700' value={data.password} onChange={handleOnChange} ></input>
                <span className=' flex text-red-50' onClick={handleshowPassword}>{showPassword ? <RiEye2Line /> : <GrFormViewHide />}</span>
                </div>
                <label htmlFor='confirmpassword' className='text-2x1  text-red-50 p-2'> Confirm Password</label>
                <div className='flex mt-1 mb-2 w-80 bg-red-300 px-2 py-1 rounded focus-within:outline-orange-700 border-none outline-none '>
                <input type={showConfirmPassword ? "text" : "password"} id="confirmpassword" name='confirmpassword' className=' mt-1 mb-2 w-80 bg-red-300 px-2 py-0 rounded outline-none focus-within:outline-orange-700'  value={data.confirmpassword} onChange={handleOnChange} ></input>
                <span className=' flex text-red-50' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <RiEye2Line /> : <GrFormViewHide />}</span>
                </div>

                <button type="submit" className='mt-3 max-w[120px] w-full bg-red-800 item-center rounded-full border-orange-700 text-white text-xl font-medium text-center py-1'>Sign up</button>
                
            </form>
            <p className='p-2 text-red-50 mt-2'>Already have account ? <Link to="/login" className='hover:text-red-800'>Login</Link></p>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Signup