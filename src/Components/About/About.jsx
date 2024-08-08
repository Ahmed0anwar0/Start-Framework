import React from 'react'

export default function About() {
  return <>
  
  <div className='bg-main-Color min-h-max items-center justify-center'>
    <div className="container h-lvh content-center">
          <div className="about w-full text-center">
            <h2 className='text-4xl text-white font-bold uppercase'>about component</h2>
            <div className="flex justify-center items-center mt-8  text-white">
                <span className=" me-3 bg-white w-20 h-1"></span>
                  <i className=" fa-solid fa-star"></i>
                <span className=" ms-3 bg-white w-20 h-1"></span>
            </div>
          </div>
          <div className="container">
            <div className="aboutDis flex w-3/4 m-auto mt-5 text-white">
              <div className="1/2"><p className='px-2'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
              <div className="1/2"><p className='px-2'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            </div>
          </div>
    </div>
  </div>
  </>
}
