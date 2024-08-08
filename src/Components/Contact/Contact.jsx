import React from 'react'

export default function Contact() {
  return <>
    <div className="contact">
      <div className="container mt-20 ">
        <div className="text-center py-5">
          <h2 className='text-4xl sec-Color font-bold uppercase'>conatct section</h2>
          <div className="flex justify-center items-center mt-3  sec-Color">
            <span className=" me-3 bg-sec-Color w-20 h-1"></span>
            <i className=" fa-solid fa-star"></i>
            <span className=" ms-3 bg-sec-Color w-20 h-1"></span>
          </div>
        </div>

        <form className="max-w-3xl mx-auto mt-10">
          <div className="relative z-0 w-full mb-8 group ">
            <input type="text" name="userName" id="userName" className=" rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" "/>
            <label for="userName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-3">  Name</label>
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input type="number" name="userAge" id="userAge" className="rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" "/>
            <label for="userAge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-3">  Age</label>
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input type="email" name="userEmail" id="userEmail" className="rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" "/>
            <label for="userEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-3">  Email</label>
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input type="password" name="userPassword" id="userPassword" className="rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" "/>
            <label for="userPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-3">  Password</label>
          </div>
          <button type="submit" className="text-white mb-5 bg-main-Color font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send Message </button>
        </form>
      </div>
    </div>





  </>
}
