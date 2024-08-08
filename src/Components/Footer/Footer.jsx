import React from 'react'

export default function Footer() {
  return <>
  
    <div className='bottom-0 inset-x-0'>
      
    <div className="container bg-sec-Color">
        <div className="footer py-20 flex  w-11/12 m-auto items-center">
            <div className="card-group m-4 text-white w-1/3">
                <div className="card">
                    <div className="card-body text-center">
                      <h3 className='text-3xl font-semibold	pt-5 mb-3'>LOCATION</h3>
                      <p className='mb-3'>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                    </div>
                </div>
            </div>
            <div className="card-group m-4 text-white w-1/3">
                <div className="card">
                    <div className="card-body text-center">
                      <h3 className='text-3xl font-semibold	pt-5 mb-3'>AROUND THE WEB</h3>
                      <div className="icons">
                          <i className="fa-brands fa-facebook mx-1 icon rounded-full border p-3"></i>
                          <i className="fa-brands fa-twitter mx-1 icon rounded-full border p-3"></i>
                          <i className="fa-brands fa-linkedin-in mx-1 icon rounded-full border p-3"></i>
                          <i className="fa-solid fa-globe mx-1 icon rounded-full border p-3"></i>
                      </div>
                    </div>
                </div>
            </div>
            <div className="card-group m-4 text-white w-1/3">
                <div className="card ">
                    <div className="card-body text-center ">
                      <h3 className='text-3xl font-semibold	pt-5 mb-3'>ABOUT FREELANCER</h3>
                      <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="p bg-sec-darck text-center">
             <p className='text-white py-5'>Copyright © Your Website 2021</p>
        </div>
    </div>
  
    </div>
  </>
}
