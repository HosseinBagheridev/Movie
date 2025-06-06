import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const[OpenMenu , setOpenMenu] = useState(false)
  

  return (
    <div className='py-2 bg-slate-800'>
      <nav className='container flex items-center justify-between uppercase py-2 text-teal-50'>
        <div className='flex items-center'>
            <Link className='text-3xl ' to='/'>ifilm</Link>
            <ul className='hidden gap-5 ml-15 md:flex md:text-sm lg:ml-25 lg:text-lg'>
                <li><Link to="/genres">Genres</Link></li>
                <li><Link to="/tvshows">tv shows</Link></li>
                <li><Link to="/people">people</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
        </div>
        <div className='hidden gap-3 md:flex md:ml-auto md:text-sm lg:text-lg'>
            <Link className='px-5 py-1 rounded-xl bg-slate-600' to="/login">login</Link>
            <Link className='px-5 py-1 rounded-xl bg-slate-600' to="/signup">sign up</Link>
        </div>
        <button onClick={()=>{setOpenMenu(!OpenMenu)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 md:hidden '
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
    </nav>
    <div className=" md:hidden">
      <ul className={OpenMenu ?  'flex flex-col gap-3 justify-center items-center mt-5 text-xl text-white uppercase border-t-2 pt-3 border-slate-600' : 'hidden'}>
                <li><Link to="/movies">movies</Link></li>
                <li><Link to="/tvshows">tv shows</Link></li>
                <li><Link to="/people">people</Link></li>
                <li><Link to="/more">more</Link></li>
      </ul>
      <div className={OpenMenu ?  'flex gap-3 justify-center items-center mt-3 text-xl text-white uppercase border-t-2 pt-3 border-slate-600': 'hidden'}>
            <Link className='px-5 py-1 rounded-xl bg-sky-400' to="#">login</Link>
            <Link className='px-5 py-1 rounded-xl bg-sky-400' to="#">sign up</Link>
      </div>
    </div>
    </div>
  )
}
