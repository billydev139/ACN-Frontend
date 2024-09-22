import Navbar from '@/components/Home/Navbar'
import React from 'react'
import Filter from '@/components/sales/Filter'

function page() {
  return (
    <div className='w-screen h-auto overflow-x-hidden bg-[#202020] '>
        <Filter/>
    </div>
  )
}

export default page
