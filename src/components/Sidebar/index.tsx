import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

const Sidebar = ({state :{isSidebarOpen, setIsSidebar}}:any) => {
  return (
    <>
    <div className={`${isSidebarOpen? '-translate-x-0' : 'translate-x-[100%]' } transition-all duration-300 bg-purple-500 fixed h-screen w-full md:w-1/3 right-0 top-0` }>
        <div className='mx-10 py-4 flex justify-between items-center'>
            <h1 className='text-2xl font-semibold text-white'>My Cart</h1>
        <IoIosCloseCircleOutline className='text-4xl text-white' onClick={()=>setIsSidebar(false)}/>
        </div>
    </div>
    </>

  )
}

export default Sidebar