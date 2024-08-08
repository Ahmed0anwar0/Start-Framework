import React from 'react'
import Child from '../Child/Child'
import Parent from '../Parent/Parent'

export default function Portfolio() {

  return (
    <div className='portfolio'>
     
      <div className="container mt-20">

        <div className="text-center py-5">
          <h2 className='text-4xl sec-Color font-bold uppercase'>portfolio component</h2>
          <div className="flex justify-center items-center mt-3  sec-Color">
            <span className=" me-3 bg-sec-Color w-20 h-1"></span>
            <i className=" fa-solid fa-star"></i>
            <span className=" ms-3 bg-sec-Color w-20 h-1"></span>
          </div>
        </div>

        <div className="items">
            <div className="cards flex flex-wrap w-10/12 m-auto">
                <Parent/>
            </div>
        </div>

      </div>
    </div>
  )
}
