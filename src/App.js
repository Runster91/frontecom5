// src/App.js
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from 'react-hot-toast';


function MyApp() {
  return (
    <>

     <div >
      <Toaster />
      <Header/>
      <main className="pt-16 bg-gray-600 min-h-[calc(100vh)]">
        <Outlet/>
        
      </main>

      
      
    </div>
    
    </>
   
  );
}

export default MyApp;
