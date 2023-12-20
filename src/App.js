// src/App.js
import { Outlet } from "react-router-dom";
import Header from "./components/Header"


function MyApp() {
  return (
    <div >
      
      <Header/>
      <main className="pt-16 bg-gray-600 min-h-[calc(100vh)]">
        <Outlet/>
        
      </main>

      
      
    </div>
  );
}

export default MyApp;
