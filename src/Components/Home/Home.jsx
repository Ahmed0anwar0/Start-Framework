import React from 'react'
import userImg from '../../../public/avataaars.svg'
export default function Home() {
    
  return<>

      <div className='home bg-main-Color'>
        <div className='container text-center h-lvh content-center'>
          <img src={userImg} className='w-1/6 m-auto'/>
          <div className="text-center pt-8">
                <h2 className='text-4xl text-white font-bold uppercase'>start Framework</h2>
                <div className="flex justify-center items-center mt-6  text-white">
                    <span className=" me-3 bg-white w-20 h-1"></span>
                      <i className=" fa-solid fa-star"></i>
                    <span className=" ms-3 bg-white w-20 h-1"></span>
                </div>
            </div>
            <div className='mt-5 text-white'>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
  
    </>
}
