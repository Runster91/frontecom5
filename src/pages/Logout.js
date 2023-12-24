import React from 'react';
import { Link } from 'react-router-dom';
import doggficer from ".././assets/dogficerout.png"


function Logoute() {
 
  

  return (
    <div>
      <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-amber-600 m-auto flex items-center flex-col p-4 rounded'>
          <div className='bottom-0 h-1/3 bg-red-800 w-full text-center rounded-full justify-center items-center '>
            <img src={doggficer} className='w-70 h-60 rounded-full drop-shadow-md shadow-md shadow-md m-auto py-1 bg-opacity-90' alt="Dog Image" />
          </div>
          <button className='mt-3 max-w[120px] w-full bg-red-800 item-center rounded-full border-orange-700 text-white text-xl font-medium text-center py-1' >
            Thank you for your visit!
          </button>
          <p className='p-2 text-red-50 mt-2'>Wanna see more? <Link to="/login" className='hover:text-red-800'>Log back in</Link></p>
          <p className='p-2 text-red-50 mt-2'>Just want to look around? <Link to="/" className='hover:text-red-800'>Return home</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Logoute;
