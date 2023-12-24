import React from 'react'
import { MdCloudUpload } from "react-icons/md";

const Home = () => {
  const uploadImaage = (e)=>{
    
  }
  return (
    <div className=' m-auto  w-full  text-red-50 p-2 bg-orange-700 flex flex-col  flex items-center justify-center p-8 '>
      
      <form className='text-2x1   text-red-50 p-2 bg-orange-400 p-5 rounded flex items-center justify-center'>
      <div className='text-2x1   text-red-50 p-2 bg-zinc-950 outline-none focus-within:outline-orange-700 flex items-center justify-center rounded '>
      <label htmlFor='size' className='text-2x1  font-bold text-red-50 p-2 bg-orange-700 outline-none focus-within:outline-orange-700 rounded-full'>Name your Dasht33</label>
        <input type={"text"} name="name" className='  text-red-50 p-2 bg-red-500 outline-none focus-within:outline-orange-700 rounded'/>
        <label htmlFor='category' className='font-bold h-9 text-red-80  p-2 bg-zinc-700 rounded'>Category</label>
        <select className=' font-bold text-red-50 p-2 bg-red-700 rounded-full'>
          <option>Kids</option>
          <option>Adults</option>

        </select>
        </div>
        
        <div className='font-bold h-20 text-orange-500 p-5 bg-zinc-950 m-5 rounded flex flex items-center justify-center flex-col'>
        <span ><MdCloudUpload /></span>
        <input type={"file"} onChange={uploadImaage} className=' text-2xl  w-full h-8 text-orange-500 p-0 bg-zinc-950  rounded-full  ' />
        </div>
        <div className=' h-10 text-red-800 p-2 bg-zinc-950 flex flex items-center justify-center p-8 rounded '>
        <label  htmlFor='budget' className='font-bold h-8 text-red-800 p-2 bg-orange-500'>Budget</label>
        <input type={"text"} className=' h-8 text-red-800 p-2 bg-red-400 outline-none focus-within:outline-orange-700' ></input>
        <label  htmlFor='description' className=' font-bold h-8 text-red-800 p-2 bg-orange-500'>Description</label>
        <textarea rows={3} className=' h-8 text-red-800 p-2 bg-red-400 outline-none focus-within:outline-orange-700 rounded'></textarea>

        </div>
       
        <div className=' h-9 text-red-800 p-2 bg-zinc-950 flex flex items-center justify-center m-5 rounded p-8 '>
        
          <p className='text-red-50 font-bold p-6 flex items-center flex justify-center text-center'>AIncrideible gift for great memories</p>           

        </div>
         <div className=' h-9 text-red-800 p-2  flex flex items-center justify-center p-5  '>
         <button className=' h-9 text-red-700 font-bold p-2 bg-zinc-950 flex flex items-center justify-center rounded-full hover:text-red-50'  >Save</button>
         </div>
        
        
      </form>
    </div>
  )
}

export default Home