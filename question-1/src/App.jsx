import  React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

function App() {


return  (
  
  
    <div className="flex flex-col items-center justify-center h-screen">
      <main>
        <Outlet/>
      </main>
      

    </div>
  
  
)
}

export default App