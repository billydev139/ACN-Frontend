"use client"
import React from 'react'
import { useState } from 'react'

function FilterDropDown({label,data,handleFilterChange}) {
    const [selected,setSelected]=useState('')
    const Handler=(e)=>{
        setSelected(e.target.value)
        handleFilterChange(e,label)
    }
  return (
    <div className='flex flex-col text-black'>
        <label htmlFor="filter" className='text-xl font-bold text-white'>{label}</label>
        <select name="" id="filtr" onChange={Handler} value={selected} className='w-full px-2 py-3 border-[1px] border-[gray]'>
            <option value="" disabled >Alle</option>
            {data.map((value)=>(
                <option value={value}>{value}</option>
            ))}
        </select>
    </div>
  )
}

export default FilterDropDown

