import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [OpenNav, setOpenNav] = useState(false); 

  function toggleNav() {
    setOpenNav(!OpenNav); 
  }

  return <>

    <nav class="bg-sec-Color py-2 fixed top-0 inset-x-0 z-30">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 container w-10/12">

        <Link to={''} className='navbar-brand font-bold text-white uppercase  text-3xl'>Start Framework </Link>

        <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 h-10 justify-center w-18 text-zinc-800 rounded-lg md:hidden focus:ring-4 ring-black border border-zinc-800" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-10 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class={` ${OpenNav ? 'block w-full' : 'hidden'} md:block`} id="navbar-default">
          <ul class="flex flex-col md:flex-row p-4 md:p-0 mt-4  rounded-lg md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li className='content-center'><NavLink className='text-white uppercase font-bold px-5' to={'About'}>About</NavLink></li>
            <li className='content-center'><NavLink className='text-white uppercase font-bold px-5' to={'Portfolio'}>Portfolio</NavLink></li>
            <li className='content-center'><NavLink className='text-white uppercase font-bold px-5' to={'Contact'}>Contact</NavLink></li>

          </ul>
        </div>
      </div>
    </nav>

  </>

}
